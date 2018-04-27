import React from "react"
import PropTypes from "prop-types"

// components
import TextInput from "../common/TextInput"
import PasswordInput from "../common/PasswordInput"
import RaisedButton from "material-ui/RaisedButton"

// style
import "./UserLoginForm.css"


const UserLoginForm = (props) => (

    <div className="user-login-form">

        <h2>Login</h2>

        <form className="user-login-form-form" onSubmit={this.onSubmit}>

            <TextInput
                label="Email"
                name="email"
                value={props.credentials.email}
                autocomplete="email"
                error={props.errors.email}
                onChange={props.onChange}
            />

            <PasswordInput
                label="Password"
                name="password"
                value={props.credentials.password}
                autocomplete="current-password"
                error={props.errors.password}
                onChange={props.onChange}
            />

            <RaisedButton
                type="submit"
                className="user-login-form-button"
                primary
                label="login"
                onClick={props.onSubmit}
                disabled={props.disabled}
            />

        </form>

    </div>

)


UserLoginForm.propTypes = {
    credentials: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    disabled: PropTypes.bool,
}


// export
export default UserLoginForm
