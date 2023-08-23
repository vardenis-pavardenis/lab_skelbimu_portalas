import config_kategorijos from "../config/config_kategorijos.mjs"

const model_kategorijos_create = async function (
    param_pavadinimas
)
{
    // document

    const document =
    {
        pavadinimas: param_pavadinimas
    }

    // insertOne

    const result_of_createOne =
        await config_kategorijos.mongodb_client
            .insertOne(document)
}

export default model_kategorijos_create