import config_users from "../config/config_users.mjs"

const model_users_create = async function (
    param_username,
    param_password
)
{
    // document

    const document =
    {
        username: param_username,
        password: param_password,
        identification_token: null,
        patikusiu_skelbimu_sarasas: [],
        banned: false
    }

    // updateOne

    const result_of_update =
    await config_users.mongodb_client.updateOne(
        {
            username: param_username
        },
        {
            $setOnInsert: document
        },
        {
            upsert: true
        }
    )

    // error: username already taken

    if (result_of_update.matchedCount === 1)
    {
        throw new Error('username already taken')
    }
}

export default model_users_create