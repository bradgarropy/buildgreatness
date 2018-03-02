import React from "react"

// api
import {registerUser} from "../../api/users"

// components
import TextInput from "../inputs/TextInput"
import PasswordInput from "../inputs/PasswordInput"
import RaisedButton from "material-ui/RaisedButton"

// style
import "../../css/RegisterForm.css"


class RegisterForm extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirmation: "",
            errors: {},
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(name, value) {

        this.setState({[name]: value})

    }

    onSubmit() {

        const {errors, ...data} = this.state

        registerUser(data)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {

                const errors = error.response.data.errors

                Object.keys(errors).forEach((key) => {
                    errors[key] = errors[key].message
                })

                this.setState({errors})

            })

    }

    render() {

        return (

            <div className="register-form">

                <form className="form" onSubmit={this.onSubmit}>

                    <TextInput
                        label="First Name"
                        name="first_name"
                        value={this.state.first_name}
                        error={this.state.errors.first_name}
                        onChange={this.onChange}
                    />

                    <TextInput
                        label="Last Name"
                        name="last_name"
                        value={this.state.last_name}
                        error={this.state.errors.last_name}
                        onChange={this.onChange}
                    />

                    <TextInput
                        label="Email"
                        name="email"
                        value={this.state.email}
                        error={this.state.errors.email}
                        onChange={this.onChange}
                    />

                    <PasswordInput
                        label="Password"
                        name="password"
                        value={this.state.password}
                        error={this.state.errors.password}
                        onChange={this.onChange}
                    />

                    <PasswordInput
                        label="Confirm Password"
                        name="confirmation"
                        value={this.state.confirmation}
                        error={this.state.errors.confirmation}
                        onChange={this.onChange}
                    />

                    <RaisedButton
                        type="submit"
                        className="button"
                        primary
                        label="submit"
                        onClick={this.onSubmit}
                    />

                </form>

            </div>

        )

    }

}


// export
export default RegisterForm
