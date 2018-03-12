import React from "react"
import {BrowserRouter as Router} from "react-router-dom"

// material ui
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

// components
import Navigation from "./Navigation"
import User from "./User"
import Content from "./Content"

// styles
import "../css/App.css"


class App extends React.Component {

    constructor(props) {

        super(props)

        this.state = {}

    }

    render() {

        return (

            <MuiThemeProvider>

                <Router>

                    <div className="app">

                        <Navigation/>
                        <User/>
                        <Content/>

                    </div>

                </Router>

            </MuiThemeProvider>

        )
    }

}


// export
export default App
