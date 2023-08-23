import React from "react"
import Create from "./Create.jsx"
import Kategorijos from "./Kategorijos.jsx"

const Page_users = function ()
{
    return <main
        style=
        {
            {
                textAlign: "left",
                width: "fit-content",
                padding: "1em",
                border: "0",
                margin: "1em auto 0 auto",
                backgroundColor: "rgb(240, 240, 240)"
            }
        }
    >
        <Create
        ></Create>

        <br></br>

        <Kategorijos
        ></Kategorijos>
    </main>
}

export default Page_users