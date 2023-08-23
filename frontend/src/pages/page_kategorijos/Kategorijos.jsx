import React from "react"
import { set_state_alert_message } from "../../Alert.jsx"
import { set_state_overlay_message } from "../../Overlay.jsx"
import service_kategorijos_find from "../../services/service_kategorijos_find.mjs"
import Kategorija from "./Kategorija.jsx"

export var refresh

const Kategorijos = function ()
{
    // states

    const [state_kategorijos, set_state_kategorijos] = React.useState([])

    // refresh

    refresh = async function ()
    {
        try
        {
            // service_kategorijos_find

            set_state_overlay_message("service_kategorijos_find...")

            const result_of_service_kategorijos_find =
                await service_kategorijos_find()

            set_state_overlay_message(null)

            // error:

            if (result_of_service_kategorijos_find.status === "error")
            {
                throw new Error(
                    result_of_service_kategorijos_find.message
                )
            }

            // success

            set_state_kategorijos(
                result_of_service_kategorijos_find
            )
        }
        catch (error)
        {
            set_state_overlay_message(null)
            set_state_alert_message(error.message)
        }
    }

    // efects

    React.useEffect(
        function ()
        {
            refresh()
        },
        []
    )

    //

    if (state_kategorijos.length === 0) return

    //

    return <div
        style=
        {
            {
                textAlign: "left",
                width: "fit-content",
                padding: "0.5em",
                border: "0",
                margin: "0",
                backgroundColor: "rgb(230, 230, 230)"
            }
        }
    >
        {
            function ()
            {
                const arr_kategorijos = []

                for (var i = 0; i < state_kategorijos.length; i++)
                {
                    const kategorija = state_kategorijos[i]

                    arr_kategorijos.push(
                        <Kategorija
                            key={i}
                            _id={kategorija._id}
                            pavadinimas={kategorija.pavadinimas}
                        ></Kategorija>
                    )
                }

                return arr_kategorijos
            }()
        }
    </div>
}

export default Kategorijos