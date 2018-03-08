import React from "react"

// components
import Logo from "./Logo"
import RegisterForm from "./forms/RegisterForm"

// styles
import "../css/ComingSoon.css"


class ComingSoon extends React.Component {

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

            <div className="coming-soon">

                <div className="logo">
                    <Logo width="300px"/>
                    <p>{message}</p>
                </div>

                <div className="form">
                    {!this.state.submitted && <RegisterForm onSubmit={this.onSubmit}/>}
                </div>

            </div>

        )

    }

}


// export
export default ComingSoon
