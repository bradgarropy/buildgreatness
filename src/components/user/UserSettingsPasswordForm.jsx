import React from "react"
import PropTypes from "prop-types"

// components
import PasswordInput from "../common/PasswordInput"
import RaisedButton from "material-ui/RaisedButton"

// styles
import "./UserSettingsPasswordForm.css"


const UserSettingsPasswordForm = (props) => (

    <div className="user-settings-password-form">

        <h2>Password Settings</h2>

        <form className="user-settings-password-form-form" onSubmit={this.onSubmit}>

            <input
                type="text"
                name="username"
                autoComplete="username"
                style={{display: "none"}}
            />

            <PasswordInput
                label="Current Password"
                name="current_password"
                value={props.passwords.current_password}
                autocomplete="current-password"
                error={props.errors.current_password}
                onChange={props.onChange}
            />

            <PasswordInput
                label="New Password"
                name="new_password"
                value={props.passwords.new_password}
                autocomplete="new-password"
                error={props.errors.new_password}
                onChange={props.onChange}
            />

            <PasswordInput
                label="Confirmation"
                name="confirmation"
                value={props.passwords.confirmation}
                autocomplete="new-password"
                error={props.errors.confirmation}
                onChange={props.onChange}
            />

            <RaisedButton
                type="submit"
                className="user-settings-password-form-button"
                primary
                label="change"
                onClick={props.onSubmit}
            />

        </form>

    </div>

)


UserSettingsPasswordForm.propTypes = {
    passwords: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
}


// export
export default UserSettingsPasswordForm
