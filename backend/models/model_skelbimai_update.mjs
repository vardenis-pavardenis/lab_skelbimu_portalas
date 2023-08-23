import mongodb from "mongodb"

import config_skelbimai from "../config/config_skelbimai.mjs"

const model_skelbimai_update = async function (
    param_id,
    param_document
)
{
    // query

    const query =
    {
        _id: new mongodb.ObjectId(param_id)
    }

    // document

    const document = param_document

    // updateOne

    const result_of_updateOne =
        await config_skelbimai.mongodb_client
            .updateOne(query, document)
}

export default model_skelbimai_update