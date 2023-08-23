import config_skelbimai from "../config/config_skelbimai.mjs"
import config_users from "../config/config_users.mjs"
import model_skelbimai_update from "../models/model_skelbimai_update.mjs"
import model_users_read from "../models/model_users_read.mjs"

const controller_skelbimai_komentarai_create = async function (req, res)
{
    // inputs

    const identification_token = req.cookies.identification_token
    const _id = req.params._id
    const komentaras = req.body.komentaras

    try
    {
        // validate_inputs

        validate_inputs(
            identification_token,
            _id,
            komentaras
        )

        // resolve_username

        const result_of_resolve_username =
            await resolve_username(
                identification_token
            )

        const username = result_of_resolve_username

        // model_skelbimai_update

        await model_skelbimai_update(
            _id,
            {
                "$push": { komentarai: komentaras }
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
    param_id,
    param_komentaras
)
{
    // param_identification_token

    config_users.validate_identification_token(param_identification_token)

    // param_id

    config_skelbimai.validate_id(param_id)

    // param_komentaras

    config_skelbimai.validate_komentaras(param_komentaras)
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

export default controller_skelbimai_komentarai_create