import React from "react"
import { set_state_overlay_message } from "../../Overlay.jsx"
import { set_state_alert_message } from "../../Alert.jsx"
import service_users_find from "../../services/service_users_find.mjs"
import User from "./User.jsx"

export var ref_filter
export var refresh

const Users = function ()
{
    // refs

    ref_filter = React.useRef({})

    // states

    const [state_users, set_state_users] = React.useState([])

    // refresh

    refresh = async function ()
    {
        // inputs

        const filter = ref_filter.current

        // service_users_find

        set_state_overlay_message("service_users_find...")

        const result_of_service_users_find =
            await service_users_find(
                filter
            )

        set_state_overlay_message(null)

        // error:

        if (result_of_service_users_find.status === "error")
        {
            set_state_alert_message(
                result_of_service_users_find.message
            )
            return
        }

        // success

        set_state_users(
            result_of_service_users_find.users
        )
    }

    //

    if (state_users.length === 0) return

    //

    return <div
        style=
        {
            {
                textAlign: "left",
                width: "fit-content",
                padding: "0.5em",
                border: "0",
                margin: "1em 0 0 0",
                backgroundColor: "rgb(230, 230, 230)"
            }
        }
    >
        {
            function ()
            {
                const users = []

                for (var i = 0; i < state_users.length; i++)
                {
                    const user = state_users[i]

                    users.push(
                        <User
                            key={i}
                            username={user.username}
                            banned={user.banned}
                        ></User>
                    )
                }

                return users
            }()
        }
    </div>
}

export default Users