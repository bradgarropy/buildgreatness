import React from "react"
import PropTypes from "prop-types"

// components
import TextInput from "../../common/TextInput"
import NumberInput from "../../common/NumberInput"

// material ui
import RaisedButton from "material-ui/RaisedButton"

// styles
import "./FoodForm.css"


const FoodForm = (props) => {

    const addButtons = (
        <div className="food-form-add-buttons">

            <RaisedButton
                type="submit"
                primary
                label="submit"
                onClick={props.onSubmit}
            />

        </div>
    )

    const updateButtons = (
        <div className="food-form-edit-buttons">

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

        <div className="food-form">

            <form className="food-form-form">

                <TextInput
                    label="Name"
                    name="name"
                    value={props.food.name}
                    error={props.errors.name}
                    onChange={props.onChange}
                />

                <div className="food-form-inputs">

                    <div className="food-form-input-group">

                        <h2>Macros</h2>

                        <NumberInput
                            label="Protein"
                            name="protein"
                            value={props.food.protein}
                            error={props.errors.protein}
                            onChange={props.onChange}
                        />

                        <NumberInput
                            label="Carbs"
                            name="carbs"
                            value={props.food.carbs}
                            error={props.errors.carbs}
                            onChange={props.onChange}
                        />

                        <NumberInput
                            label="Fat"
                            name="fat"
                            value={props.food.fat}
                            error={props.errors.fat}
                            onChange={props.onChange}
                        />

                    </div>

                    <div className="food-form-input-group">

                        <h2>Other</h2>

                        <NumberInput
                            label="Fiber"
                            name="fiber"
                            value={props.food.fiber}
                            error={props.errors.fiber}
                            onChange={props.onChange}
                        />

                        <NumberInput
                            label="Sodium"
                            name="sodium"
                            value={props.food.sodium}
                            error={props.errors.sodium}
                            onChange={props.onChange}
                        />

                    </div>

                </div>

                {props.update ? updateButtons : addButtons}

            </form>

        </div>

    )

}


FoodForm.propTypes = {
    food: PropTypes.object,
    update: PropTypes.bool,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onDelete: PropTypes.func,
}


// export
export default FoodForm
