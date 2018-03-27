import React from "react"
import PropTypes from "prop-types"

// components
import NumberInput from "../common/NumberInput"
import DateInput from "../common/DateInput"

// material ui
import RaisedButton from "material-ui/RaisedButton"

// styles
import "./MeasurementsForm.css"


const MeasurementsForm = (props) => (

    <div className="measurements-form">

        <form className="measurements-form-form" onSubmit={this.onSubmit}>

            <DateInput
                label="Date"
                name="date"
                value={props.measurement.date}
                error={props.errors.date}
                onChange={props.onChange}
            />

            <div className="measurements-form-inputs">

                <div className="measurements-form-group">

                    <h2>Composition</h2>

                    <NumberInput
                        label="Weight"
                        name="weight"
                        value={props.measurement.weight}
                        error={props.errors.weight}
                        onChange={props.onChange}
                    />

                    <NumberInput
                        label="Body Fat"
                        name="body_fat"
                        value={props.measurement.body_fat}
                        error={props.errors.body_fat}
                        onChange={props.onChange}
                    />

                </div>

                <div className="measurements-form-group">

                    <h2>Measurements</h2>

                    <NumberInput
                        label="Bicep"
                        name="bicep"
                        value={props.measurement.bicep}
                        error={props.errors.bicep}
                        onChange={props.onChange}
                    />

                    <NumberInput
                        label="Calf"
                        name="calf"
                        value={props.measurement.calf}
                        error={props.errors.calf}
                        onChange={props.onChange}
                    />

                    <NumberInput
                        label="Chest"
                        name="chest"
                        value={props.measurement.chest}
                        error={props.errors.chest}
                        onChange={props.onChange}
                    />

                    <NumberInput
                        label="Quad"
                        name="quad"
                        value={props.measurement.quad}
                        error={props.errors.quad}
                        onChange={props.onChange}
                    />

                    <NumberInput
                        label="Shoulder"
                        name="shoulder"
                        value={props.measurement.shoulder}
                        error={props.errors.shoulder}
                        onChange={props.onChange}
                    />

                    <NumberInput
                        label="Waist"
                        name="waist"
                        value={props.measurement.waist}
                        error={props.errors.waist}
                        onChange={props.onChange}
                    />

                </div>

            </div>

            <div className="measurements-form-buttons">

                <RaisedButton
                    type="submit"
                    primary
                    label="submit"
                    onClick={props.onSubmit}
                />

                <RaisedButton
                    secondary
                    label="delete"
                    onClick={props.onDelete}
                />

            </div>


        </form>

    </div>

)


MeasurementsForm.propTypes = {
    measurement: PropTypes.object,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onDelete: PropTypes.func,
}


// export
export default MeasurementsForm
