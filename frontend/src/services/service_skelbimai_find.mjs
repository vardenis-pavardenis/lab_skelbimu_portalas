const service_skelbimai_find = async function (
    param_kategorija,
    param_aprasas
    )
{
    // method

    const method = "GET"

      // query

      const query = new URLSearchParams()

      if (param_kategorija !== undefined) query.append("kategorija", param_kategorija)
      if (param_aprasas !== "") query.append("aprasas", param_aprasas)
  
      // uri   
  
      const uri = "/api/skelbimai/?" + query.toString()

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

    return { status: "success", skelbimai: body.skelbimai }
}

export default service_skelbimai_find