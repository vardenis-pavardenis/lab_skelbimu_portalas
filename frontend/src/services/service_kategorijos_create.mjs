const service_kategorijos_create = async function (
    param_pavadinimas
)
{
    // method

    const method = "POST"

    // uri

    const uri = "/api/kategorijos/"

    // headers

    const headers =
    {
        "Content-Type": "application/json"
    }

    // body

    const body =
    {
        pavadinimas: param_pavadinimas
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
        throw new Error("invalid status code")

    // error:

    if (result_of_fetch.status === 400)
    {
        const body = await result_of_fetch.json()

        throw new Error(
            body.message
        )
    }

    // success
}

export default service_kategorijos_create