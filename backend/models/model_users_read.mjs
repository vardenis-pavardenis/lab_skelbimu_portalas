import config_users from "../config/config_users.mjs"

const model_users_read = async function (
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

    // findOne

    const result_of_findOne =
        await config_users.mongodb_client
            .findOne(query, options)

    // error: does not exists

    if (result_of_findOne === null) throw new Error("does not exists")

    // success

    return result_of_findOne
}

export default model_users_read