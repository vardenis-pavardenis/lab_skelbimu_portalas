import config_users from "../config/config_users.mjs"

const model_users_update = async function (
    param_query,
    param_document
)
{
    // query

    const query = param_query

    // document

    const document = param_document

    // updateOne

    const result_of_updateOne =
        await config_users.mongodb_client
            .updateOne(query, document)

    // error: does not exist

    if (result_of_updateOne.matchedCount === 0) throw new Error("does not exist")
}

export default model_users_update