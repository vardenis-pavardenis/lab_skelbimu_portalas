import React from "react"

var state_overlay_message
export var set_state_overlay_message

const Overlay = function ()
{
    // states

    [state_overlay_message, set_state_overlay_message] = React.useState(null)

    //

    if (state_overlay_message === null) return

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
                    
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }
            }
        >
            {state_overlay_message}
        </div>
    </div >
}

export default Overlay