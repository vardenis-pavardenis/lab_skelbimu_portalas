import mongodb from "mongodb"

import config_kategorijos from "../config/config_kategorijos.mjs"

const model_kategorijos_delete = async function (
    param_id
)
{
    // query

    const query =
    {
        _id: new mongodb.ObjectId(param_id)
    }

    // deleteOne

    const result_of_createOne =
        await config_kategorijos.mongodb_client
            .deleteOne(query)
}

export default model_kategorijos_delete