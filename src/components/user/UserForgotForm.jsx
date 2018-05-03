import React from "react"
import PropTypes from "prop-types"

// components
import TextInput from "../common/TextInput"
import RaisedButton from "material-ui/RaisedButton"

// style
import "./UserForgotForm.css"


const UserForgotForm = (props) => (

    <div className="user-forgot-form">

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
                disabled={props.disabled}
            />

        </form>

    </div>

)


UserForgotForm.propTypes = {
    user: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    disabled: PropTypes.bool,
}


// export
export default UserForgotForm
