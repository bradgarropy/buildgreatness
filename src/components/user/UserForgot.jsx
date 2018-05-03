import React from "react"

// components
import UserForgotForm from "../user/UserForgotForm"

// styles
import "./UserForgot.css"

// api
import users from "../../api/users"


class UserForgot extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            errors: {},
            user: {
                email: "",
            },
            submitted: false,
            completed: false,
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

        this.setState({submitted: true})

        users.forgot(this.state.user)
            .then(() => {

                this.setState({completed: true})

            })
            .catch(error => {

                const errors = error.response.data

                this.setState({
                    errors,
                    submitted: false,
                })

            })

    }

    render() {

        return (

            <div className="user-forgot">

                <h2>Forgot Password</h2>

                {this.state.completed ?

                    <p>An email has been sent to <b>{this.state.user.email}</b> containing a link to reset your password.</p>

                    :

                    <UserForgotForm
                        user={this.state.user}
                        errors={this.state.errors}
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                        disabled={this.state.submitted}
                    />

                }

            </div>

        )

    }

}


// export
export default UserForgot
