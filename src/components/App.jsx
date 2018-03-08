import React from "react"

// material ui
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

// components
import ComingSoon from "./ComingSoon"

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

                <div className="app">

                    <ComingSoon/>

                </div>

            </MuiThemeProvider>

        )
    }

}


// export
export default App
