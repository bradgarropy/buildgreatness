import React from "react"
import PropTypes from "prop-types"

// components
import TextInput from "../inputs/TextInput"
import PasswordInput from "../inputs/PasswordInput"
import RaisedButton from "material-ui/RaisedButton"

// style
import "../../css/RegisterForm.css"


const RegisterForm = (props) => (

    <div className="register-form">

        <form className="form" onSubmit={this.onSubmit}>

            <TextInput
                label="First Name"
                name="first_name"
                value={props.user.first_name}
                error={props.errors.first_name}
                onChange={props.onChange}
            />

            <TextInput
                label="Last Name"
                name="last_name"
                value={props.user.last_name}
                error={props.errors.last_name}
                onChange={props.onChange}
            />

            <TextInput
                label="Email"
                name="email"
                value={props.user.email}
                error={props.errors.email}
                onChange={props.onChange}
            />

            <PasswordInput
                label="Password"
                name="password"
                value={props.user.password}
                error={props.errors.password}
                onChange={props.onChange}
            />

            <PasswordInput
                label="Confirm Password"
                name="confirmation"
                value={props.user.confirmation}
                error={props.errors.confirmation}
                onChange={props.onChange}
            />

            <RaisedButton
                type="submit"
                className="button"
                primary
                label="register"
                onClick={props.onSubmit}
            />

        </form>

    </div>

)


RegisterForm.propTypes = {
    user: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
}


// export
export default RegisterForm
