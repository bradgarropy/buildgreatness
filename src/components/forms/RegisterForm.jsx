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

        <form className="form" onSubmit={props.onSubmit}>

            <TextInput
                label="First Name"
                name="first_name"
            />

            <TextInput
                label="Last Name"
                name="last_name"
            />

            <TextInput
                label="Email"
                name="email"
            />

            <PasswordInput
                label="Password"
                name="password"
            />

            <PasswordInput
                label="Confirm Password"
                name="confirmation"
            />

            <RaisedButton
                className="button"
                primary
                label="submit"
            />

        </form>

    </div>

)


RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
}


RegisterForm.defaultProps = {

}


// export
export default RegisterForm
