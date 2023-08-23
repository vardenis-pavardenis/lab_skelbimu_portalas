const service_skelbimai_read = async function (
    param_id
)
{
    // method

    const method = "GET"

    // uri   

    const uri = `/api/skelbimai/${param_id}/`

    // uri

    // headers

    // body

    const result_of_fetch = await fetch(
        uri,
        {
            method: method
        }
    )

    // error: unvalid status code

    if (result_of_fetch.status !== 200 &&
        result_of_fetch.status !== 400)
    {
        throw new Error("invalid status code")
    }

    // error:

    if (result_of_fetch.status === 400)
    {
        const body = await result_of_fetch.json()

        const message = body.message

        throw new Error(message)
    }

    // success

    const body = await result_of_fetch.json()

    return body
}

export default service_skelbimai_read