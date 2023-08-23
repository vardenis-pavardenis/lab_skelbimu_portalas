const service_skelbimai_create = async function (
    param_kategorija,
    param_pavadinimas,
    param_aprasas,
    param_kaina,
    param_image_base64
)
{
    // method

    const method = "POST"

    // uri

    const uri = "/api/skelbimai/"

    // headers

    const headers =
    {
        "Content-Type": "application/json"
    }

    // body

    const body =
    {
        kategorija: param_kategorija,
        pavadinimas: param_pavadinimas,
        aprasas: param_aprasas,
        kaina: param_kaina,
        image_base64: param_image_base64
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

export default service_skelbimai_create