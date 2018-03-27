import React from "react"
import PropTypes from "prop-types"

// components
import TextInput from "../common/TextInput"
import PasswordInput from "../common/PasswordInput"
import RaisedButton from "material-ui/RaisedButton"

// style
import "./UserRegisterForm.css"


const UserRegisterForm = (props) => (

    <div className="register-form">

        <h2>Register</h2>

        <form className="register-form-form" onSubmit={this.onSubmit}>

            <TextInput
                label="First Name"
                name="first_name"
                value={props.user.first_name}
                autocomplete="given-name"
                error={props.errors.first_name}
                onChange={props.onChange}
            />

            <TextInput
                label="Last Name"
                name="last_name"
                value={props.user.last_name}
                autocomplete="family-name"
                error={props.errors.last_name}
                onChange={props.onChange}
            />

            <TextInput
                label="Email"
                name="email"
                value={props.user.email}
                autocomplete="email"
                error={props.errors.email}
                onChange={props.onChange}
            />

            <PasswordInput
                label="Password"
                name="password"
                value={props.user.password}
                autocomplete="new-password"
                error={props.errors.password}
                onChange={props.onChange}
            />

            <PasswordInput
                label="Confirm Password"
                name="confirmation"
                value={props.user.confirmation}
                autocomplete="new-password"
                error={props.errors.confirmation}
                onChange={props.onChange}
            />

            <RaisedButton
                type="submit"
                className="register-form-button"
                primary
                label="register"
                onClick={props.onSubmit}
            />

        </form>

    </div>

)


UserRegisterForm.propTypes = {
    user: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
}


// export
export default UserRegisterForm
