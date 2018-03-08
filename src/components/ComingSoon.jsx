import React from "react"

// components
import Logo from "./Logo"
import RegisterForm from "./forms/RegisterForm"

// styles
import "../css/ComingSoon.css"

// api
import {registerUser} from "../api/users"


class ComingSoon extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            errors: {},
            user: {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                confirmation: "",
            },
            submitted: false,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(name, value) {

        let user = this.state.user
        user[name] = value

        this.setState({user})

    }

    onSubmit(event) {

        event.preventDefault()

        registerUser(this.state.user)
            .then(() => {

                this.setState({submitted: true})

            })
            .catch(error => {

                const errors = error.response.data
                this.setState({errors})

            })

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
                    {!this.state.submitted &&
                        <RegisterForm
                            user={this.state.user}
                            errors={this.state.errors}
                            onChange={this.onChange}
                            onSubmit={this.onSubmit}
                        />
                    }
                </div>

            </div>

        )

    }

}


// export
export default ComingSoon
