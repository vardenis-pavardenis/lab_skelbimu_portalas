import React from "react"
import service_sign_in from "../services/service_sign_in.mjs"
import { set_state_overlay_message } from "../Overlay.jsx"
import { set_state_alert_message } from "../Alert.jsx"
import { set_state_username } from "../Header.jsx"
import { set_state_page } from "../Page.jsx"

const Page_sign_in = function ()
{
    // refs

    const ref_input_username = React.useRef()
    const ref_input_password = React.useRef()

    //

    return <>
        <main
            style=
            {
                {
                    width: "fit-content",
                    padding: "1em",
                    border: "0",
                    margin: "1em auto 0 auto",
                    textAlign: "left",
                    backgroundColor: "rgb(240, 240, 240)"
                }
            }
        >
            <div>Username:</div>

            <input
                ref={ref_input_username}
                type="text"
            ></input>

            <div>Password:</div>

            <input
                ref={ref_input_password}
                type="password"
            ></input>

            <button
                style=
                {
                    {
                        display: "block",
                        margin: "1em 0 0 0",
                    }
                }
                onClick=
                {
                    async function ()
                    {
                        // inputs

                        const username = ref_input_username.current.value
                        const password = ref_input_password.current.value

                        // service_sign_in

                        set_state_overlay_message("service_sign_in...")

                        const result_of_service_sign_in =
                            await service_sign_in(
                                username,
                                password
                            )

                        set_state_overlay_message(null)

                        // error:

                        if (result_of_service_sign_in.status === "error")
                        {
                            set_state_alert_message(
                                result_of_service_sign_in.message
                            )
                            return
                        }

                        // success

                        set_state_username(username)

                        set_state_page(null)
                    }
                }
            >Sing-in</button>
        </main>
    </>
}

export default Page_sign_in