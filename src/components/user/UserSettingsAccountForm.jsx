import React from "react"
import PropTypes from "prop-types"

// components
import TextInput from "../common/TextInput"
import RaisedButton from "material-ui/RaisedButton"

// styles
import "./UserSettingsAccountForm.css"


const UserSettingsAccountForm = (props) => (

    <div className="user-settings-account-form">

        <h2>Account Settings</h2>

        <form className="user-settings-account-form-form" onSubmit={this.onSubmit}>

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

            <RaisedButton
                type="submit"
                className="user-settings-account-form-button"
                primary
                label="update"
                onClick={props.onSubmit}
                disabled={props.disabled}
            />

        </form>

    </div>

)


UserSettingsAccountForm.propTypes = {
    user: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    disabled: PropTypes.bool,
}


// export
export default UserSettingsAccountForm
