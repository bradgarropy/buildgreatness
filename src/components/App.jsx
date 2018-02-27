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
            <Logo width="300px"/>
            <p>Register to get notified of new features!</p>
            <RegisterForm/>
        </div>

    </MuiThemeProvider>

)


// export
export default App
