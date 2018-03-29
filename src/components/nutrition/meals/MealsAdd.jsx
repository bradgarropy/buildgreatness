import React from "react"
import {Redirect} from "react-router-dom"

// components
import MealsForm from "./MealsForm"

// api
import mealsAPI from "../../../api/meals"


class MealsAdd extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            errors: {},
            meal: {
                name: "",
                food_id: "",
                quantity: "",
            },
            redirect: false,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(name, value) {

        let meal = this.state.meal
        meal[name] = value

        this.setState({meal})

    }

    onSubmit(event) {

        event.preventDefault()

        const meal = this.state.meal

        mealsAPI.add(meal)
            .then(() => {

                this.setState({redirect: true})

            })
            .catch((error) => {

                const errors = error.response.data
                this.setState({errors})

            })

    }

    render() {

        if(this.state.redirect) {
            return <Redirect to="/nutrition/meals"/>
        }

        return (

            <div className="meals-add">

                <h2>Meals Add</h2>

                <MealsForm
                    meal={this.state.meal}
                    errors={this.state.errors}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />

            </div>

        )

    }

}


// export
export default MealsAdd
