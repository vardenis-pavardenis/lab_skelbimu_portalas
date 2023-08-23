import React from "react"
import { set_state_alert_message } from "../../Alert.jsx"
import { set_state_overlay_message } from "../../Overlay.jsx"
import service_kategorijos_delete from "../../services/service_kategorijos_delete.mjs"
import { refresh } from "./Kategorijos.jsx"

const Button_delete = function (props)
{
    // props

    const _id = props._id

    //

    return <button
        style=
        {
            {
                margin: "0 0.25em"
            }
        }
        onClick=
        {
            async function ()
            {
                try
                {
                    // service_kategorijos_delete

                    set_state_overlay_message("service_kategorijos_delete...")

                    const result_of_service_kategorijos_delete =
                        await service_kategorijos_delete(
                            _id
                        )

                    set_state_overlay_message(null)
                }
                catch (error)
                {
                    set_state_overlay_message(null)
                    set_state_alert_message(
                        error.message
                    )
                }

                // success

                refresh()
            }
        }
    >Delete</button>
}

export default Button_delete