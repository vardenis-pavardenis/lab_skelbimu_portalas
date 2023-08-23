import React from "react"
import { set_state_alert_message } from "../../Alert.jsx"
import { set_state_overlay_message } from "../../Overlay.jsx"
import service_users_update from "../../services/service_users_update.mjs"
import { refresh } from "./Users.jsx"

const Button_unban = function (props)
{
    // props

    const username = props.username

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
                // service_users_update

                set_state_overlay_message("service_users_update...")

                const result_of_service_users_update =
                    await service_users_update(
                        username,
                        "banned",
                        false
                    )

                set_state_overlay_message(null)

                // error:

                if (result_of_service_users_update.status === "error")
                {
                    set_state_alert_message(
                        result_of_service_users_update.message
                    )
                    return
                }

                // success

                refresh()
            }
        }
    >Unban</button>
}

export default Button_unban