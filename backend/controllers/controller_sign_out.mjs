import config_users from "../config/config_users.mjs"
import model_users_read from "../models/model_users_read.mjs"
import model_users_update from "../models/model_users_update.mjs"

const controller_sign_out = async function (req, res)
{
    // inputs

    const identification_token = req.cookies.identification_token

    try
    {
        // validate_inputs

        validate_inputs(identification_token)

        // resolve_username

        const result_of_resolve_username =
            await resolve_username(identification_token)

        const username = result_of_resolve_username

        // model_users_update

        await model_users_update(
            {
                username: username
            },
            {
                "$set":
                {
                    identification_token: null
                }
            }
        )

        // success

        res.cookie("identification_token", null, { maxAge: 0 })

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
    param_identification_token
)
{
    // param_identification_token

    config_users.validate_identification_token(param_identification_token)
}

//
// resolve_username
//

const resolve_username = async function (param_identification_token)
{
    const result_of_model_users_read =
        await model_users_read(
            {
                identification_token: param_identification_token
            },
            {
                _id: 0,
                username: 1
            }
        )

    const username = result_of_model_users_read.username

    return username
}

export default controller_sign_out