import React from "react"
import PropTypes from "prop-types"

// material ui
import TextField from "material-ui/TextField"


const NumberInput = (props) => (

    <TextField
        type="number"
        floatingLabelText={props.label}
        name={props.name}
        value={props.value}
        autoComplete={props.autocomplete}
        errorText={props.error}
        onChange={(event, newValue) => props.onChange(props.name, newValue)}
    />

)


NumberInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    autocomplete: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
}


NumberInput.defaultProps = {

}


// export
export default NumberInput
