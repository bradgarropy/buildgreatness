import React from "react"
import PropTypes from "prop-types"

// material ui
import TextField from "material-ui/TextField"


const TextArea = (props) => (

    <TextField
        multiLine
        floatingLabelText={props.label}
        name={props.name}
        value={props.value}
        autoComplete={props.autocomplete}
        errorText={props.error}
        onChange={(event, newValue) => props.onChange(props.name, newValue)}
    />

)


TextArea.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    autocomplete: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
}


// export
export default TextArea
