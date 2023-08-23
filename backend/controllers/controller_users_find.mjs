import config_users from "../config/config_users.mjs"
import model_users_find from "../models/model_users_find.mjs"
import model_users_read from "../models/model_users_read.mjs"

//
// controller_users_find
//

const controller_users_find = async function (req, res)
{
    try
    {
        // inputs

        const identification_token = req.cookies.identification_token

        config_users.validate_identification_token(identification_token)

        const query =
        {
        }

        if (req.query.banned !== undefined) 
        {
            config_users.validate_banned(req.query.banned)
            query.banned = req.query.banned
        }

        if (req.query.username !== undefined) 
        {
            if(typeof req.query.username !== "string") throw new Error("username not a string")
            query.username =
            {
                "$regex": req.query.username,
                "$options": "i"
            }
        }

        // resolve_username

        const result_of_resolve_username =
            await resolve_username(identification_token)

        const sender = result_of_resolve_username

        // error: unauthorized

        if (sender !== "admin") throw new Error("unauthorized")

        // model_users_find

        const result_of_model_users_find =
            await model_users_find(
                query,
                {
                    _id: 0,
                    username: 1,
                    banned: 1
                }
            )

        // success

        res.statusCode = 200
        res.json({ users: result_of_model_users_find })
    }
    catch (error)
    {
        res.statusCode = 400
        res.json({ message: error.message })
    }
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

export default controller_users_find