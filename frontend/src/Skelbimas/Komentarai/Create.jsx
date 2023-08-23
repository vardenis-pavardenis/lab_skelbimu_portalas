import React from "react"
import Textarea from "../../components/Textarea.jsx"
import { set_state_overlay_message } from "../../Overlay.jsx"
import service_skelbimai_komentarai_create from "../../services/service_skelbimai_komentarai_create.mjs"
import { set_state_alert_message } from "../../Alert.jsx"
import { fetch_skelbimas } from "../Skelbimas.jsx"

const Create = function (props)
{
    // props

    const _id = props._id

    // refs

    const ref_komentaras = React.useRef()

    //

    return <div
    >
        <Textarea
            label={"komentaras"}
            ref_value={ref_komentaras}
            init_value={""}

        ></Textarea>

        <button
            onClick=
            {
                async function ()
                {
                    // service_komentarai_create

                    set_state_overlay_message("service_skelbimai_komentarai_create...")

                    const result_of_service_komentarai_create =
                        await service_skelbimai_komentarai_create(
                            _id,
                            ref_komentaras.current
                        )

                    set_state_overlay_message(null)

                    // error:

                    if (result_of_service_komentarai_create.status === "error")
                    {
                        set_state_alert_message(
                            result_of_service_komentarai_create.message
                        )
                        return
                    }

                    // success

                    fetch_skelbimas(_id)
                }
            }
        >Komentuoti</button>
    </div>
}

export default Create