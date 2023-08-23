import config_users from "../config/config_users.mjs"
import model_users_read from "../models/model_users_read.mjs"
import model_users_update from "../models/model_users_update.mjs"

const controller_users_update = async function (req, res)
{
    // inputs

    const identification_token = req.cookies.identification_token
    const username = req.params.username
    const prop = req.params.prop
    const value = req.body.value

    try
    {
        // validate_inputs

        validate_inputs(
            identification_token,
            username,
            prop,
            value
        )

        // resolve_sender

        const result_of_resolve_username =
            await resolve_sender(
                identification_token
            )

        const sender = result_of_resolve_username

        // error: unauthorised

        if (username === "admin") throw new Error("unauthorised")

        if (prop === "banned" && sender !== "admin") throw new Error("unauthorised")


        // model_users_create

        await model_users_update(
            {
                username: username
            },
            {
                "$set": { [prop]: value }
            }
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
    param_identification_token,
    param_username,
    param_prop,
    param_value
)
{
    // param_identification_token

    config_users.validate_identification_token(param_identification_token)

    // param_username

    // error: unauthorized

    if (param_username === "admin") throw new Error("unauthorized")

    config_users.validate_username(param_username)

    // param_prop

    if (param_prop === "banned")
    {
        config_users.validate_banned(param_value)

        // success

        return
    }

    // error: param_prop unvalid

    throw new Error("param_prop unvalid")
}

//
// resolve_sender
//

const resolve_sender = async function (param_identification_token)
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

    return result_of_model_users_read.username
}

export default controller_users_update