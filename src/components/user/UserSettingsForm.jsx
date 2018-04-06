import React from "react"
import PropTypes from "prop-types"

// components
import TextInput from "../common/TextInput"
import RaisedButton from "material-ui/RaisedButton"

// styles
import "./UserSettingsForm.css"


const UserSettingsForm = (props) => (

    <div className="user-settings-form">

        <h2>Settings</h2>

        <form className="user-settings-form-form" onSubmit={this.onSubmit}>

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
                className="user-settings-form-button"
                primary
                label="update"
                onClick={props.onSubmit}
            />

        </form>

    </div>

)


UserSettingsForm.propTypes = {
    user: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
}


// export
export default UserSettingsForm
