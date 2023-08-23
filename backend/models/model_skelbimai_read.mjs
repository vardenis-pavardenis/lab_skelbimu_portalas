import mongdb from "mongodb"
import config_skelbimai from "../config/config_skelbimai.mjs"

const model_skelbimai_read = async function (
    param_id,
    param_projection
)
{
    // query

    const query =
    {
        _id: new mongdb.ObjectId(param_id)
    }

    // options

    const options =
    {
    }

    if (param_projection !== undefined) options.projection = param_projection

    // findOne

    const result_of_findOne =
        await config_skelbimai.mongodb_client
            .findOne(query, options)

    return result_of_findOne
}

export default model_skelbimai_read