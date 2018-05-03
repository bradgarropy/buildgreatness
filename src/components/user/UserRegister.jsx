import React from "react"

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
            form: {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                confirmation: "",
            },
            submitted: false,
            completed: false,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(name, value) {

        let form = this.state.form
        form[name] = value

        this.setState({form})

    }

    onSubmit(event) {

        event.preventDefault()

        this.setState({submitted: true})

        users.register(this.state.form)
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

            <div className="user-register">

                <h2>Register</h2>

                {this.state.completed ?

                    <p>An email has been sent to <b>{this.state.form.email}</b> containing a link to activate your account.</p>

                    :

                    <UserRegisterForm
                        form={this.state.form}
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
export default UserRegister
