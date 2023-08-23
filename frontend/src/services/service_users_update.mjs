const service_users_update = async function (
    param_username,
    param_prop,
    param_value
)
{
    // method

    const method = "PUT"

    // uri

    const uri = `/api/users/${param_username}/${param_prop}`

    // headers

    const headers =
    {
        "Content-Type": "application/json"
    }

    // body

    const body = { value: param_value }

    try
    {
        // fetch

        const result_of_fetch = await fetch(
            uri,
            {
                method: method,
                headers: headers,
                body: JSON.stringify(body)
            }
        )

        // error: unvalid status code

        if (result_of_fetch.status !== 200 &&
            result_of_fetch.status !== 400)
            throw new Error("invalid status code")

        //

        if (result_of_fetch.status === 400)
        {
            const body = await result_of_fetch.json()
            throw new Error(body.message)
        }

        // success

        return { status: "success" }
    }
    catch (error)
    {
        return { status: "error", message: error.message }
    }
}

export default service_users_update 