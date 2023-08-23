import React from "react"
import Filter from "./Filter.jsx"
import Users from "./Users.jsx"

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
        <Filter
        ></Filter>

        <Users
        ></Users>
    </main>
}

export default Page_users