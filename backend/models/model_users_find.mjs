import config_users from "../config/config_users.mjs"

const model_users_find = async function (
    param_query,
    param_projection
)
{
    // query

    const query = param_query

    // options

    const options =
    {
    }

    if (param_projection !== undefined) options.projection = param_projection

    // find

    const result_of_find =
        await config_users.mongodb_client
            .find(query, options)
            .toArray()

    // error: does not exists

    if (result_of_find === null) throw new Error("does not exists")

    // success

    return result_of_find
}

export default model_users_find