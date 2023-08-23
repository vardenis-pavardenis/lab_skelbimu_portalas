import React from "react"
import Button_ban from "./Button_ban.jsx"
import Button_unban from "./Button_unban.jsx"

const User = function (props)
{
    // props

    const username = props.username
    const banned = props.banned

    //

    return <div
        style=
        {
            {
                width: "fit-content",
                padding: "0.25em",
                border: "0",
                margin: "0.25em",
                backgroundColor: "rgb(210, 210, 210)"
            }
        }
    >
        <span>{username}</span>

        {
            function ()
            {
                if (banned === true)
                {
                    return <Button_unban
                        username={username}
                    ></Button_unban>
                }

                return <Button_ban
                    username={username}
                ></Button_ban>
            }()
        }
    </div>
}

export default User