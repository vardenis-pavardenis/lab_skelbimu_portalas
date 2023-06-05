import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.mjs"

const element_id_root = document.getElementById("root")

const root = ReactDOM.createRoot(element_id_root)

const componet_App = React.createElement(App)

root.render(componet_App)