import config_users from "../config/config_users.mjs"
import model_users_read from "../models/model_users_read.mjs"
import model_users_update from "../models/model_users_update.mjs"
import generate_random_string from "../utils/generate_random_string.mjs"
import hash_sha256_base64 from "../utils/hash_sha256_base64.mjs"

const controller_sign_in = async function (req, res)
{
    // inputs

    const username = req.body.username
    const password = req.body.password

    try
    {
        // validate_inputs

        validate_inputs(username, password)

        // compute_passwords_hash

        const passwords_hash =
            compute_passwords_hash(password)

        // verify_that_password_correct

        await verify_that_password_correct(username, passwords_hash)

        // verify_that_user_is_not_banned

        await verify_that_user_is_not_banned(username)

        // identification_token

        const identification_token = generate_random_string(512)

        // model_users_update

        await model_users_update(
            {
                username: username
            },
            {
                "$set":
                {
                    identification_token: identification_token
                }
            }
        )

        // success

        res.cookie("identification_token", identification_token, { httpOnly: true, SameSite: "Strict" })

        res.statusCode = 200
        res.end()
    }
    catch (error)
    {
        res.statusCode = 400
        res.json({ message: error.message })
    }
}

//
// validate_inputs
//

const validate_inputs = function (
    param_username,
    param_password
)
{
    // param_username

    config_users.validate_username(param_username)

    // param_password

    config_users.validate_password(param_password)
}

//
// compute_passwords_hash
//

const compute_passwords_hash = function (param_password)
{
    const salted_password = param_password + config_users.salt

    const rersult_of_hash_sha256_base64 =
        hash_sha256_base64(salted_password)

    return rersult_of_hash_sha256_base64
}

//
// verify_that_password_correct
//

const verify_that_password_correct = async function (
    param_username,
    param_password
)
{
    const result_of_model_users_read =
        await model_users_read(
            {
                username: param_username
            }
            ,
            {
                _id: 0,
                password: 1
            }
        )

    // error: password incorrect

    if (result_of_model_users_read.password !== param_password)
    {
        throw new Error("password incorrect")
    }
}

//
// verify_that_user_is_not_banned
//

const verify_that_user_is_not_banned = async function (param_username)
{
    // 

    const result_of_model_users_read =
        await model_users_read(
            {
                username: param_username
            },
            {
                _id: 0,
                banned: 1
            }
        )

    // banned

    if (result_of_model_users_read.banned === true) throw new Error("banned")
}


export default controller_sign_in