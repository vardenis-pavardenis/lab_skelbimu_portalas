import React from "react"
import Komentaras from "./Komentaras.jsx"

const List = function (props)
{
    // props

    const komentarai = props.komentarai

    //

    const components = []

    for (var i = 0; i < komentarai.length; i++)
    {
        const komentaras = komentarai[i]

        components.push(
            <Komentaras
            komentaras_id={komentaras._id}
            komentaras={komentaras}
            ></Komentaras>
        )
    }

    return components
}

export default List