import React from "react"
import PropTypes from "prop-types"

// material ui
import TextField from "material-ui/TextField"


const PasswordInput = (props) => (

    <TextField
        type="password"
        floatingLabelText={props.label}
        name={props.name}
        value={props.value}
        error={props.error}
        onChange={(event, newValue) => props.onChange(props.name, newValue)}
    />

)


PasswordInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
}


PasswordInput.defaultProps = {

}


// export
export default PasswordInput
