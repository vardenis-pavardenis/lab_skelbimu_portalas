import React from "react"
import Button_delete from "./Button_delete.jsx"

const Kategorija = function (props)
{
    // props

    const _id = props._id

    const pavadinimas = props.pavadinimas

    //

    return <div
        style=
        {
            {
                width: "fit-content",
                padding: "0.25em",
                border: "0",
                margin: "0.25em",
                backgroundColor: "rgb(210, 210, 210)"
            }
        }
    >
        <span>{pavadinimas}</span>

        <Button_delete
            _id={_id}
        ></Button_delete>
    </div>
}

export default Kategorija