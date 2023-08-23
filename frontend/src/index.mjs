import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

const div_id_root = document.getElementById("root")

const root = ReactDOM.createRoot(div_id_root)

const componet_App = React.createElement(App)

root.render(componet_App)