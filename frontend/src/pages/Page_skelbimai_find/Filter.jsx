import React from "react"
import { set_state_alert_message } from "../../Alert.jsx"
import { set_state_overlay_message } from "../../Overlay.jsx"
import { set_state_results } from "./Results.jsx"
import service_skelbimai_find from "../../services/service_skelbimai_find.mjs"
import Textarea from "../../components/Textarea.jsx"
import Select_kategorija from "../../components/Select_kategorija.jsx"

const Filter = function ()
{
    // refs

    const ref_kategorija = React.useRef()
    const ref_aprasas = React.useRef()

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
        <Select_kategorija
            ref_value={ref_kategorija}
        ></Select_kategorija>

        <Textarea
            label={"Tekstas"}
            init_value={""}
            ref_value={ref_aprasas}
        ></Textarea>

        <button
            style=
            {
                {
                    margin: "1em 0 0 0.5em",
                }
            }
            onClick=
            {
                async function ()
                {
                    // inputs

                    const kategorija = ref_kategorija.current
                    const aprasas = ref_aprasas.current

                    // service_skelbimai_find

                    set_state_overlay_message("service_skelbimai_find...")

                    const result_of_service_skelbimai_find =
                        await service_skelbimai_find(
                            kategorija,
                            aprasas
                        )

                    set_state_overlay_message(null)

                    // error:

                    if (result_of_service_skelbimai_find.status === "error")
                    {
                        set_state_alert_message(
                            result_of_service_skelbimai_find.message
                        )
                        return
                    }

                    // success

                    set_state_results(
                        result_of_service_skelbimai_find.skelbimai
                    )
                }
            }
        >Ieškoti</button>
    </main>
}

export default Filter