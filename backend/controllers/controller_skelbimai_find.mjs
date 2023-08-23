import model_skelbimai_find from "../models/model_skelbimai_find.mjs"

const controller_skelbimai_find = async function (req, res)
{
    // inputs

    const kategorija = req.query.kategorija
    const aprasas = req.query.aprasas

    const query = {}

    if (kategorija !== undefined)
        query.kategorija = kategorija

    if (aprasas !== undefined)
        query.aprasas =
        {
            $regex: aprasas,
            $options: "i"
        }

    const projection =
    {
        _id: 1,
        pavadinimas: 1
    }

    const skip = 0

    const limit = 0

    const sort =
    {
        kaina: -1
    }

    try
    {
        // model_skelbimai_find

        const result_of_model_skelbimai_find =
            await model_skelbimai_find(
                query,
                projection,
                skip,
                limit,
                sort
            )

        // success

        res.statusCode = 200
        res.json({ skelbimai: result_of_model_skelbimai_find })
    }
    catch (error)
    {
        res.statusCode = 400
        res.json({ message: error.message })
    }
}

export default controller_skelbimai_find