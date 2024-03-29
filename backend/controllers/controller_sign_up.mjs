import config_users from "../config/config_users.mjs"
import model_users_create from "../models/model_users_create.mjs"
import hash_sha256_base64 from "../utils/hash_sha256_base64.mjs"

const controller_sign_up = async function (req, res)
{
    // inputs

    const username = req.body.username
    const password = req.body.password

    try
    {
        // validate_inputs

        validate_inputs(
            username,
            password
        )

        // compute_passwords_hash

        const passwords_hash =
            compute_passwords_hash(password)

        // model_users_create

        await model_users_create(
            username,
            passwords_hash,
        )

        // success

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

export default controller_sign_up