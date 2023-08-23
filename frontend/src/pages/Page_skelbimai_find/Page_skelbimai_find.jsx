import React from "react"
import Filter from "./Filter.jsx"
import Results from "./Results.jsx"

const Page_skelbimai_find = function ()
{
    //

    return <main
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
        <Filter
        ></Filter>

        <Results>
        </Results>
    </main>
}

export default Page_skelbimai_find