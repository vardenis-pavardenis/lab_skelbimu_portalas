import model_kategorijos_find from "../models/model_kategorijos_find.mjs"

const controller_kategorijos_find = async function (req, res)
{
    // inputs

    try
    {
        // model_kategorijos_find

        const result_of_model_kategorijos_find =
            await model_kategorijos_find(
                {
                }
            )

        // success

        res.statusCode = 200
        res.json({ kategorijos: result_of_model_kategorijos_find })
    }
    catch (error)
    {
        res.statusCode = 400
        res.json({ message: error.message })
    }
}

export default controller_kategorijos_find