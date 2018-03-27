import React from "react"
import PropTypes from "prop-types"

// material ui
import DatePicker from "material-ui/DatePicker"


const DateInput = (props) => (

    <DatePicker
        autoOk
        floatingLabelText={props.label}
        name={props.name}
        value={props.value}
        autoComplete={props.autocomplete}
        errorText={props.error}
        onChange={(_, date) => props.onChange(props.name, date)}
    />

)


DateInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.instanceOf(Date),
    autocomplete: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
}


DateInput.defaultProps = {

}


// export
export default DateInput
