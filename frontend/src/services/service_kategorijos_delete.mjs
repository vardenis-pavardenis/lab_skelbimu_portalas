const service_kategorijos_delete = async function (
    param_id
)
{
    // method

    const method = "DELETE"

    // uri

    const uri = `/api/kategorijos/${param_id}/`

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
}

export default service_kategorijos_delete