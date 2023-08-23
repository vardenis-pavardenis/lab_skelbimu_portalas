import React from "react"

const Komentaras = function (props)
{
    // props

    const komentaras_id = props.komentaras_id
    const komentaras = props.komentaras

    //

    return <div
        style=
        {
            {
                width: "fit-content",
                padding: "0.25em",
                border: "0",
                margin: "0.25em",
                backgroundColor: "rgb(220, 220, 220)"
            }
        }
    >{komentaras}</div>
}

export default Komentaras