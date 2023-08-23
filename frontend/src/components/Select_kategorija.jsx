import React from "react"
import { set_state_alert_message } from "../Alert.jsx"
import { set_state_overlay_message } from "../Overlay.jsx"
import Select from "./Select.jsx"
import service_kategorijos_find from "../services/service_kategorijos_find.mjs"

const Select_kategorija = function (props)
{
    // states

    const [state_options, set_state_options] = React.useState([])

    // refresh

    const refresh = async function ()
    {
        try
        {
            // service_kategorijos_find

            set_state_overlay_message("service_kategorijos_find")

            const result_of_service_kategorijos_find =
                await service_kategorijos_find()

            set_state_overlay_message(null)

            // arr_options

            const arr_options = []

            for (var i = 0; i < result_of_service_kategorijos_find.length; i++)
            {
                const kategorija = result_of_service_kategorijos_find[i]

                arr_options.push(
                    kategorija.pavadinimas
                )
            }

            set_state_options(arr_options)
        }
        catch (error)
        {
            set_state_overlay_message(null)
            set_state_alert_message(error.message)
        }
    }

    // effects

    React.useEffect(
        function ()
        {
            refresh()
        },
        []
    )

    return <div
        style=
        {
            {
                width: "fit-content",
                padding: "0 0.25em",
                border: "0",
                margin: "0 0.25em",
                textAlign: "left",
                backgroundColor: "rgb(230, 230, 230)"
            }
        }
    >
        <div>Kategorija</div>

        <Select
            ref_value={props.ref_value}
            arr_options={state_options}
        ></Select>
    </div>
}

export default Select_kategorija