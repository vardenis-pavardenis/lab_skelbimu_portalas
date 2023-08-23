import React from "react"
import { set_state_page } from "../Page.jsx"

const Header_guest = function ()
{
    //

    return <header
        style=
        {
            {
                width: "100%",
                minHeight: "6.5em",
                lineHeight: "6.5em",
                textAlign: "right",
                backgroundColor: "rgb(240, 240, 240)"
            }
        }
    >
        <button
            onClick=
            {
                function ()
                {
                    set_state_page("Page_skelbimai_find")
                }
            }
        >Skelbimų paieška</button>

        <button
            onClick=
            {
                function ()
                {
                    set_state_page("Page_sign_in")
                }
            }
        >Sign-in</button>

        <button
            onClick=
            {
                function ()
                {
                    set_state_page("Page_sign_up")
                }
            }
        >Sing-up</button>

    </header>
}

export default Header_guest