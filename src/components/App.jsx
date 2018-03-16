import React from "react"
import {BrowserRouter as Router} from "react-router-dom"

// material ui
import MaterialUI from "material-ui/styles/MuiThemeProvider"

// components
import Navigation from "./Navigation"
import User from "./User"
import Content from "./Content"

// styles
import "../css/App.css"

// utils
import authorization from "../utils/authorization"


const App = () => {

    authorization.headers()

    return (

        <MaterialUI>

            <Router>

                <div className="app">

                    <Navigation/>
                    <User/>
                    <Content/>

                </div>

            </Router>

        </MaterialUI>

    )

}


// export
export default App
