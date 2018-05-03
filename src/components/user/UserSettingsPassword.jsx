import React from "react"
import jwtdecode from "jwt-decode"

// components
import UserSettingsPasswordForm from "./UserSettingsPasswordForm"

// styles
import "./UserSettingsPassword.css"

// api
import users from "../../api/users"

// utils
import authorization from "../../utils/authorization"


class UserSettingsPassword extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            errors: {},
            passwords: {
                current_password: "",
                new_password: "",
                confirmation: "",
            },
            submitted: false,
            completed: false,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(name, value) {

        let passwords = this.state.passwords
        passwords[name] = value

        this.setState({passwords})

    }

    onSubmit(event) {

        event.preventDefault()

        this.setState({submitted: true})

        users.password(this.state.passwords)
            .then(response => {

                const token = response.data.token
                let user = jwtdecode(token)

                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", JSON.stringify(token))

                authorization.headers()

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

            <div className="user-settings-password">

                <h2>Password Settings</h2>

                {this.state.completed ?

                    <p>Your password has been changed!</p>

                    :

                    <UserSettingsPasswordForm
                        passwords={this.state.passwords}
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
export default UserSettingsPassword
