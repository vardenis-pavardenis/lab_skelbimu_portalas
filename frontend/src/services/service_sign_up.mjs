const service_sign_up = async function (
    param_username,
    param_password
)
{
    // method

    const method = "POST"

    // uri

    const uri = "/api/sign_up"

    // headers

    const headers =
    {
        "Content-Type": "application/json"
    }

    // body

    const body =
    {
        username: param_username,
        password: param_password
    }

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

    return { status: "success" }
}

export default service_sign_up