import React from "react"
import Image_base64 from "../../components/Image_base64.jsx"
import Textarea from "../../components/Textarea.jsx"
import { set_state_overlay_message } from "../../Overlay.jsx"
import service_skelbimai_create from "../../services/service_skelbimai_create.mjs"
import { set_state_alert_message } from "../../Alert.jsx"
import Select_kategorija from "../../components/Select_kategorija.jsx"

const Page_skelbimai_create = function ()
{
    // refs

    const ref_kategorija = React.useRef()
    const ref_pavadinimas = React.useRef()
    const ref_aprasas = React.useRef()
    const ref_kaina = React.useRef()
    const ref_image_base64 = React.useRef()

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
            label={"Pavadinimas"}
            init_value={""}
            ref_value={ref_pavadinimas}
        ></Textarea>

        <Textarea
            label={"Aprašas"}
            init_value={""}
            ref_value={ref_aprasas}
        ></Textarea>

        <Textarea
            label={"Kaina"}
            init_value={""}
            ref_value={ref_kaina}
        ></Textarea>

        <Image_base64
            ref_value={ref_image_base64}
        ></Image_base64>

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
                    const pavadinimas = ref_pavadinimas.current
                    const aprasas = ref_aprasas.current
                    const kaina = parseInt(ref_kaina.current)
                    const image_base64 = ref_image_base64.current

                    // service_skelbimai_create

                    set_state_overlay_message("service_skelbimai_create...")

                    const result_of_service_skelbimai_create =
                        await service_skelbimai_create(
                            kategorija,
                            pavadinimas,
                            aprasas,
                            kaina,
                            image_base64
                        )

                    set_state_overlay_message(null)

                    // error:

                    if (result_of_service_skelbimai_create.status === "error")
                    {
                        set_state_alert_message(
                            result_of_service_skelbimai_create.message
                        )
                        return
                    }

                    // success

                    set_state_alert_message("success")
                }
            }
        >Kurti</button>
    </main>
}

export default Page_skelbimai_create