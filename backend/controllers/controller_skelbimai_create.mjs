import config_skelbimai from "../config/config_skelbimai.mjs"
import config_users from "../config/config_users.mjs"
import model_kategorijos_find from "../models/model_kategorijos_find.mjs"
import model_skelbimai_create from "../models/model_skelbimai_create.mjs"
import model_users_read from "../models/model_users_read.mjs"

const controller_skelbimai_create = async function (req, res)
{
    // inputs

    const identification_token = req.cookies.identification_token
    const kategorija = req.body.kategorija
    const pavadinimas = req.body.pavadinimas
    const aprasas = req.body.aprasas
    const kaina = req.body.kaina
    const image_base64 = req.body.image_base64

    try
    {
        // validate_inputs

        validate_inputs(
            identification_token,
            kategorija,
            pavadinimas,
            aprasas,
            kaina,
            image_base64
        )

        // resolve_username

        const result_of_resolve_username =
            await resolve_username(
                identification_token
            )

        const username = result_of_resolve_username

        // error: permission denied

        if (username === "admin") throw new Error("permission denied")

        // verify kategorija 

        await model_kategorijos_find(
            {
                pavadinimas: kategorija
            },
            {
                _id: 0,
                pavadinimas: 0
            }
        )

        // model_skelbimai_create

        await model_skelbimai_create(
            username,
            kategorija,
            pavadinimas,
            aprasas,
            kaina,
            image_base64
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
    param_kategorija,
    param_pavadinimas,
    param_aprasas,
    param_kaina,
    param_image_base64
)
{
    // param_identification_token

    config_users.validate_identification_token(param_identification_token)

    // param_kategorija

    config_skelbimai.validate_kategorija(param_kategorija)

    // param_pavadinimas

    config_skelbimai.validate_pavadinimas(param_pavadinimas)

    // param_aprasas

    config_skelbimai.validate_aprasas(param_aprasas)

    // param_kaina

    config_skelbimai.validate_kaina(param_kaina)

    // param_image_base64

    config_skelbimai.validate_image_base64(param_image_base64)
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

export default controller_skelbimai_create