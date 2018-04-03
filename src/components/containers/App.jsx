import React from "react"
import {BrowserRouter as Router} from "react-router-dom"

// material ui
import MaterialUI from "material-ui/styles/MuiThemeProvider"

// components
import Navigation from "../navigation/Navigation"
import UserButton from "../user/UserButton"
import Content from "./Content"

// styles
import "./App.css"

// utils
import authorization from "../../utils/authorization"


const App = () => {

    authorization.headers()

    return (

        <MaterialUI>

            <Router>

                <div className="app">

                    <Navigation/>
                    <UserButton/>
                    <Content/>

                </div>

            </Router>

        </MaterialUI>

    )

}


// export
export default App
