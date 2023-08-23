import React from "react"
import Header_admin from "./headers/Header_admin.jsx"
import Header_guest from "./headers/Header_guest.jsx"
import Header_user from "./headers/Header_user.jsx"

export var state_username
export var set_state_username

const Header = function ()
{
    [state_username, set_state_username] = React.useState(null)

    if (state_username === null) return <Header_guest></Header_guest>
    if (state_username === "admin") return <Header_admin></Header_admin>
    return <Header_user></Header_user>
}

export default Header