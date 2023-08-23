import React from "react"

const Text = function (props)
{
    // props

    const label = props.label
    const value = props.value

    //

    return <div
        style=
        {
            {
                textAlign: "left",
                width: "100%",
                height: "fit-content",
                padding: "0.25em",
                border: "0",
                margin: "0.25em",
                backgroundColor: "rgb(230, 230, 230)"
            }
        }
    >
        <div
            style=
            {
                {
                    width: "fit-content",
                    height: "fit-content",
                    padding: "0",
                    border: "0",
                    margin: "0.25em",
                    backgroundColor: "rgb(220, 220, 220)"   
                }
            }
        >{label}:</div>

        <div
            style=
            {
                {
                    width: "fit-content",
                    height: "fit-content",
                    padding: "0.25em",
                    border: "0",
                    margin: "0.25em 0.25em 0 0.25em",
                    backgroundColor: "rgb(220, 220, 220)",
                }
            }
        >{value}</div>

    </div>
}

export default Text