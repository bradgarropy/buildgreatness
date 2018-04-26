import React from "react"
import {Redirect} from "react-router-dom"

// components
import UserRegisterForm from "./UserRegisterForm"

// styles
import "./UserRegister.css"

// api
import users from "../../api/users"


class UserRegister extends React.Component {

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

        users.register(this.state.user)
            .then(() => {

                this.setState({submitted: true})

            })
            .catch(error => {

                const errors = error.response.data
                this.setState({errors})

            })

    }

    render() {

        if(this.state.redirect) {
            return <Redirect to="/login"/>
        }

        return (

            <div className="user-register">

                <h2>Register</h2>

                {this.state.submitted ?

                    <div>
                        <h3>Thank you for registering!</h3>
                        <p>The next step is to activate your account.</p>
                        <p>An email was sent to <em>{this.state.user.email}</em> with the activation link.</p>
                    </div>

                    :

                    <UserRegisterForm
                        user={this.state.user}
                        errors={this.state.errors}
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                    />
                }

            </div>

        )

    }

}


// export
export default UserRegister
