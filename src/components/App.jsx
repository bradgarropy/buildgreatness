import React from "react"

// material ui
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

// components
import Logo from "./Logo"
import RegisterForm from "./forms/RegisterForm"

// styles
import "../css/App.css"


const App = () => (

    <MuiThemeProvider>

        <div className="app">

            <div className="logo">
                <Logo width="300px"/>
                <p>Register to get notified of new features!</p>
            </div>

            <div className="form">
                <RegisterForm/>
            </div>

        </div>

    </MuiThemeProvider>

)


// export
export default App
