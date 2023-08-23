import React from "react"
import Create from "./Create.jsx"
import List from "./List.jsx"

const Komentarai = function (props)
{
    // props

    const _id = props._id

    const komentarai = props.komentarai

    //

    return <div
        style=
        {
            {
                width: "100%",
                padding: "0",
                border: "0",
                margin: "0",
                textAlign: "left",
                backgroundColor: "rgb(230, 230, 230)"
            }
        }
    >

        <div
            style=
            {
                {
                    width: "fit-content",
                    padding: "0.25em",
                    border: "0",
                    margin: "0.25em",
                    backgroundColor: "rgb(200, 200, 200)"
                }
            }
        >Komentarai</div>

        <List
            komentarai={komentarai}
        ></List>

        <Create
            _id={_id}
        ></Create>

    </div>
}

export default Komentarai