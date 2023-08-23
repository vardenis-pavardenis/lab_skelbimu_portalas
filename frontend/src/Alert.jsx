import React from "react"

var state_alert_message
export var set_state_alert_message

const Alert = function ()
{
    // states

    [state_alert_message, set_state_alert_message] = React.useState(null)

    //

    if (state_alert_message === null) return

    //

    return <div
        style=
        {
            {
                position: "fixed",
                inset: "0 0 0 0",
                backgroundColor: "rgba(100, 100, 100, 0.9)",
            }
        }
    >
        <div
            style=
            {
                {
                    width: "fit-content",
                    fontWeight: "bold",
                    textAlign: "center",

                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }
            }
        >
            <div>{state_alert_message}</div>

            <button
                style=
                {
                    {
                        margin: "1em 0 0 0"
                    }
                }
                onClick=
                {
                    function ()
                    {
                        set_state_alert_message(null)
                    }
                }
            >Close</button>
        </div>
    </div >
}

export default Alert