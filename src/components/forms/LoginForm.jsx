import React from "react"
import PropTypes from "prop-types"

// components
import TextInput from "../inputs/TextInput"
import PasswordInput from "../inputs/PasswordInput"
import RaisedButton from "material-ui/RaisedButton"

// style
import "../../css/LoginForm.css"


const LoginForm = (props) => (

    <div className="login-form">

        <h2>Login</h2>

        <form className="login-form-form" onSubmit={this.onSubmit}>

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
                className="login-form-button"
                primary
                label="login"
                onClick={props.onSubmit}
            />

        </form>

    </div>

)


LoginForm.propTypes = {
    credentials: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
}


// export
export default LoginForm
