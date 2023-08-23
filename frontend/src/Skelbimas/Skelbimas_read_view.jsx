import React from "react"
import Text from "../components/Text.jsx"

const Skelbimas_read_view = function (props)
{
    // props 

    const _id = props._id
    const kategorija = props.kategorija
    const autorius = props.autorius
    const pavadinimas = props.pavadinimas
    const aprasas = props.aprasas
    const image_base64 = props.image_base64
    const kaina = props.kaina

    //

    return <div
        style=
        {
            {
                width: "fit-content",
                padding: "1em",
                border: "0",
                margin: "auto",
                textAlign: "left",
                backgroundColor: "rgb(240, 240, 240)"
            }
        }
    >
        <Text
            label={"_id"}
            value={_id}
        ></Text>

        <Text
            label={"autorius"}
            value={autorius}
        ></Text>

        <Text
            label={"kategorija"}
            value={kategorija}
        ></Text>

        <Text
            label={"pavadinimas"}
            value={pavadinimas}
        ></Text>

        <Text
            label={"aprasas"}
            value={aprasas}
        ></Text>

        <Text
            label={"kaina"}
            value={kaina}
        ></Text>


        <div
            style=
            {
                {
                    padding: "0.25em",
                    border: "0",
                    margin: "0.25em",
                    backgroundColor: "rgb(200, 200, 200)"
                }
            }
        >image_base64</div>

        <img
            style=
            {
                {
                    maxWidth: "100%"
                }
            }
            src={image_base64}></img>
    </div>
}

export default Skelbimas_read_view