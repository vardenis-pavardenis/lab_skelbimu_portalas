import React from "react"

export var state_username
export var set_state_username

const Header = function ()
{
    [state_username, set_state_username] = React.useState(null)
}

export default Header