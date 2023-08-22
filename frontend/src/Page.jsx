import React from "react"

export var state_page
export var set_state_page

const Page = function ()
{
    // states

    [state_page, set_state_page] = React.useState("Page_sign_in")
}

export default Page