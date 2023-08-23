import React from "react"
import { set_state_alert_message } from "../../Alert.jsx"
import Textarea from "../../components/Textarea.jsx"
import { set_state_overlay_message } from "../../Overlay.jsx"
import service_kategorijos_create from "../../services/service_kategorijos_create.mjs"
import { refresh } from "./Kategorijos.jsx"

const Create = function ()
{
    // refs

    const ref_pavadinimas = React.useRef()

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
        <Textarea
            label={"pavadinimas"}
            ref_value={ref_pavadinimas}
            init_value={""}
        ></Textarea>

        <button
            onClick=
            {
                async function ()
                {
                    // input

                    const pavadinimas = ref_pavadinimas.current

                    try
                    {
                        // service_kategorijos_create

                        set_state_overlay_message("service_kategorijos_create...")

                        await service_kategorijos_create(
                            pavadinimas
                        )

                        set_state_overlay_message(null)
                    }
                    catch (error)
                    {
                        set_state_overlay_message(null)

                        set_state_alert_message(
                            error.message
                        )
                        return
                    }

                    // success

                    await refresh()
                }
            }
        >Create</button>
    </div>
}

export default Create