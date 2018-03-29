import React from "react"
import PropTypes from "prop-types"

// components
import TextInput from "../../common/TextInput"
import NumberInput from "../../common/NumberInput"

// material ui
import RaisedButton from "material-ui/RaisedButton"

// styles
import "./MealsForm.css"


const MealsForm = (props) => {

    const addButtons = (
        <div className="meals-form-add-buttons">

            <RaisedButton
                type="submit"
                primary
                label="submit"
                onClick={props.onSubmit}
            />

        </div>
    )

    const updateButtons = (
        <div className="meals-form-edit-buttons">

            <RaisedButton
                type="submit"
                primary
                label="update"
                onClick={props.onSubmit}
            />

            <RaisedButton
                secondary
                label="delete"
                onClick={props.onDelete}
            />

        </div>
    )

    return (

        <div className="meals-form">

            <form className="meals-form-form">

                <TextInput
                    label="Name"
                    name="name"
                    value={props.meal.name}
                    error={props.errors.name}
                    onChange={props.onChange}
                />

                <div className="meals-form-inputs">

                    <div className="meals-form-input-group">

                        <h2>Items</h2>

                        <TextInput
                            label="Food ID"
                            name="food_id"
                            value={props.meal.food_id}
                            error={props.errors.food_id}
                            onChange={props.onChange}
                        />

                        <NumberInput
                            label="Quantity"
                            name="quantity"
                            value={props.meal.quantity}
                            error={props.errors.quantity}
                            onChange={props.onChange}
                        />

                    </div>

                </div>

                {props.update ? updateButtons : addButtons}

            </form>

        </div>

    )

}


MealsForm.propTypes = {
    meal: PropTypes.object,
    update: PropTypes.bool,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onDelete: PropTypes.func,
}


// export
export default MealsForm
