import React from "react"
import PropTypes from "prop-types"

// components
import PasswordInput from "../common/PasswordInput"
import RaisedButton from "material-ui/RaisedButton"

// style
import "./UserResetForm.css"


const UserResetForm = (props) => (

    <div className="user-reset-form">

        <h2>Password Reset</h2>

        <form className="user-reset-form-form" onSubmit={this.onSubmit}>

            <input
                type="text"
                name="username"
                autoComplete="username"
                style={{display: "none"}}
            />

            <PasswordInput
                label="New Password"
                name="new_password"
                value={props.form.new_password}
                autocomplete="new-password"
                error={props.errors.new_password}
                onChange={props.onChange}
            />

            <PasswordInput
                label="Confirm Password"
                name="confirmation"
                value={props.form.confirmation}
                autocomplete="new-password"
                error={props.errors.confirmation}
                onChange={props.onChange}
            />

            <RaisedButton
                type="submit"
                className="user-reset-form-button"
                primary
                label="reset"
                onClick={props.onSubmit}
            />

        </form>

    </div>

)


UserResetForm.propTypes = {
    form: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
}


// export
export default UserResetForm
