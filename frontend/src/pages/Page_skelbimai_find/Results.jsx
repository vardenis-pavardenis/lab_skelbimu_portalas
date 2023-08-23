import React from "react"
import { fetch_skelbimas } from "../../Skelbimas/Skelbimas.jsx"

export var state_results
export var set_state_results

const Results = function ()
{

    [state_results, set_state_results] = React.useState([])

    const arr = []

    for (var i = 0; i < state_results.length; i += 1)
    {
        const result = state_results[i]

        arr.push(
            <div
                key={i}
                style=
                {
                    {
                        width: "fit-content",
                        padding: "0.25em",
                        border: "0",
                        margin: "0.25em",
                        textAlign: "left",
                        backgroundColor: "rgb(230, 230, 230)",
                        cursor: "pointer"
                    }
                }
                onClick=
                {
                    function ()
                    {
                        fetch_skelbimas(result._id)
                    }
                }
            >{result.pavadinimas}</div>
        )
    }

    return arr
}

export default Results