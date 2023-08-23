import config_skelbimai from "../config/config_skelbimai.mjs"
import model_skelbimai_read from "../models/model_skelbimai_read.mjs"

const controller_skelbimai_read = async function (req, res)
{
    // inputs

    const _id = req.params._id

    // validate_inputs

    validate_inputs(
        _id)

    const projection =
    {
    }

    try
    {
        // model_skelbimai_read

        const result_of_model_skelbimai_read =
            await model_skelbimai_read(
                _id,
                projection
            )

        const skelbimas = result_of_model_skelbimai_read

        // success

        res.statusCode = 200
        res.json( skelbimas )
    }
    catch (error)
    {
        res.statusCode = 400
        res.json({ message: error.message })
    }
}

//
// validate_inputs
//

const validate_inputs = function (
    param_id
)
{
    // param_id

    config_skelbimai.validate_id(param_id)
}

export default controller_skelbimai_read