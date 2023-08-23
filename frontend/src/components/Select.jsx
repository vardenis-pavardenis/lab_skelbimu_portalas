import React from "react"

const Select = function (props)
{
    // props

    const ref_value = props.ref_value

    const arr_options = props.arr_options

    // options

    const options =
        [
            <option
                key={-1}
                hidden
                disabled
                value="default"
            > -- select an option -- </option>
        ]

    //

    for (var i = 0; i < arr_options.length; i++)
    {
        const option = arr_options[i]

        options.push(
            <option
                key={i}
                value={option}
            >{option}</option>
        )
    }

    //

    return <div
    >
        <select
            defaultValue={"default"}
            onChange=
            {
                function (param)
                {
                    // inputs

                    const value = param.target.value

                    //

                    ref_value.current = value
                }
            }
        >{options}</select>
    </div>
}

export default Select