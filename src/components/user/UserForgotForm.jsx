import React from "react"
import PropTypes from "prop-types"

// components
import TextInput from "../common/TextInput"
import RaisedButton from "material-ui/RaisedButton"

// style
import "./UserForgotForm.css"


const UserRegisterForm = (props) => (

    <div className="user-forgot-form">

        <h2>Forgot Password</h2>

        <form className="user-forgot-form-form" onSubmit={this.onSubmit}>

            <TextInput
                label="Email"
                name="email"
                value={props.user.email}
                autocomplete="email"
                error={props.errors.email}
                onChange={props.onChange}
            />

            <RaisedButton
                type="submit"
                className="user-forgot-form-button"
                primary
                label="submit"
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