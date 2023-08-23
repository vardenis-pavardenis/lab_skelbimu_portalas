import config_kategorijos from "../config/config_kategorijos.mjs"
import config_users from "../config/config_users.mjs"
import model_kategorijos_create from "../models/model_kategorijos_create.mjs"
import model_users_read from "../models/model_users_read.mjs"

const controller_kategorijos_create = async function (req, res)
{
    // inputs

    const identification_token = req.cookies.identification_token

    const pavadinimas = req.body.pavadinimas

    try
    {
        // validate_inputs

        validate_inputs(
            identification_token,
            pavadinimas
        )

        // resolve_username

        const result_of_resolve_username =
            await resolve_username(
                identification_token
            )

        const username = result_of_resolve_username

        // error: permission denied

        if(username !== "admin") throw new Error("permission denied")

        // model_kategorijos_create

        await model_kategorijos_create(
            pavadinimas
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
    param_pavadinimas
)
{
    // param_identification_token

    config_users.validate_identification_token(param_identification_token)

    // param_pavadinimas

    config_kategorijos.validate_pavadinimas(param_pavadinimas)
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

export default controller_kategorijos_create