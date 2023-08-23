import React from "react"
import Header from "./Header.jsx"
import Page from "./Page.jsx"
import Overlay from "./Overlay.jsx"
import Alert from "./Alert.jsx"
import Skelbimas from "./Skelbimas/Skelbimas.jsx"

const App = function ()
{
    return <>
        <Header></Header>

        <Page></Page>

        <Skelbimas></Skelbimas>

        <Overlay></Overlay>

        <Alert></Alert>
    </>
}

export default App