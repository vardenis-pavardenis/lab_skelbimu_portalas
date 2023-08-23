import React from "react"
import Textarea from "../../components/Textarea.jsx"
import { refresh, ref_filter} from "./Users.jsx"

const Filter = function ()
{
    // refs

    const ref_username = React.useRef()

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
            label={"username"}
            ref_value={ref_username}
            init_value={""}
        ></Textarea>

        <button
            onClick=
            {
                function ()
                {
                    // input

                    const username = ref_username.current

                    //

                    ref_filter.current =
                    {
                        username: username
                    }

                    refresh()
                }
            }
        >Search</button>
    </div>
}

export default Filter