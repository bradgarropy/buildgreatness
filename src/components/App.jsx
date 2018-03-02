import React from "react"

// material ui
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

// components
import Logo from "./Logo"
import RegisterForm from "./forms/RegisterForm"

// styles
import "../css/App.css"


class App extends React.Component {

    constructor(props) {

        super(props)

        this.state = {submitted: false}

        this.onSubmit = this.onSubmit.bind(this)

    }

    onSubmit() {
        this.setState({submitted: true})
    }

    render() {

        const message = this.state.submitted
            ? "Thank you!"
            : "Register to get notified of new features!"

        return (

            <MuiThemeProvider>

                <div className="app">

                    <div className="logo">
                        <Logo width="300px"/>
                        <p>{message}</p>
                    </div>

                    <div className="form">
                        {!this.state.submitted && <RegisterForm onSubmit={this.onSubmit}/>}
                    </div>

                </div>

            </MuiThemeProvider>

        )
    }

}


// export
export default App
