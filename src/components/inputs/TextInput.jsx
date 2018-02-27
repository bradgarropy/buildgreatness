import React from "react"
import PropTypes from "prop-types"

// material ui
import TextField from "material-ui/TextField"


const TextInput = (props) => (

    <TextField
        floatingLabelText={props.label}
        name={props.name}
        value={props.value}
        error={props.error}
        onChange={(event, newValue) => props.onChange(props.name, newValue)}
    />

)


TextInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
}


TextInput.defaultProps = {

}


// export
export default TextInput
