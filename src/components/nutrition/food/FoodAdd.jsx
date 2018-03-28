import React from "react"
import {Redirect} from "react-router-dom"

// components
import FoodForm from "./FoodForm"

// api
import foodAPI from "../../../api/food"


class FoodAdd extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            errors: {},
            food: {
                carbs: "",
                fat: "",
                fiber: "",
                name: "",
                protein: "",
                sodium: "",
            },
            redirect: false,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(name, value) {

        let food = this.state.food
        food[name] = value

        this.setState({food})

    }

    onSubmit(event) {

        event.preventDefault()

        const food = this.state.food

        foodAPI.add(food)
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
            return <Redirect to="/nutrition/food"/>
        }

        return (

            <div className="food-add">

                <h2>Food Add</h2>

                <FoodForm
                    food={this.state.food}
                    errors={this.state.errors}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />

            </div>

        )

    }

}


// export
export default FoodAdd
