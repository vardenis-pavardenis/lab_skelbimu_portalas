import model_skelbimai_read from "../models/model_skelbimai_read.mjs"

const controller_skelbimai_komentarai_read = async function (req, res)
{
    // inputs

    const _id = req.params._id

    const projection =
    {
        _id: 0,
        komentarai: 1
    }

    try
    {
        // model_skelbimai_read

        const result_of_model_skelbimai_read =
            await model_skelbimai_read(
                _id,
                projection
            )

        const komentarai = result_of_model_skelbimai_read.komentarai

        // success

        res.statusCode = 200
        res.json({ komentarai: komentarai })
    }
    catch (error)
    {
        res.statusCode = 400
        res.json({ message: error.message })
    }
}

export default controller_skelbimai_komentarai_read