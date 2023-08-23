const service_kategorijos_find = async function (
    )
{
    // method

    const method = "GET"

    // uri

    const uri = "/api/kategorijos/"

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
        throw new Error("unvalid status code")

    // error:

    if (result_of_fetch.status === 400)
    {
        const body = await result_of_fetch.json()

        throw new Error(
            body.message
        )
    }

    // success

    const body = await result_of_fetch.json()

    return body.kategorijos
}

export default service_kategorijos_find