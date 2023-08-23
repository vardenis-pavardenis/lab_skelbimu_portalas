const service_users_find = async function (
    parma_query
)
{
    // method

    const method = "GET"

    // uri

    const uri = `/api/users/?${new URLSearchParams(parma_query).toString()}`

    // fetch

    const result_of_fetch = await fetch(
        uri,
        {
        }
    )

    // error: unvalid status code

    if (result_of_fetch.status !== 200 &&
        result_of_fetch.status !== 400)
    {
        return { status: "error", message: "invalid status code" }
    }

    // error:

    if (result_of_fetch.status === 400)
    {
        const body = await result_of_fetch.json()

        const message = body.message

        return { status: "error", message: message }
    }

    // success

    const body = await result_of_fetch.json()

    return { status: "success", users: body.users }
}

export default service_users_find 