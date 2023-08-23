const service_skelbimai_komentarai_create = async function (
    _id,
    param_komentaras
)
{
    // method

    const method = "POST"

    // uri

    const uri = `/api/skelbimai/${_id}/komentarai/`

    // headers

    const headers =
    {
        "Content-Type": "application/json"
    }

    // body

    const body =
    {
        komentaras: param_komentaras
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

export default service_skelbimai_komentarai_create