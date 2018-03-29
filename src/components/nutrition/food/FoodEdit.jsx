import React from "react"
import PropTypes from "prop-types"
import {Redirect} from "react-router-dom"

// components
import FoodForm from "./FoodForm"

// api
import foodAPI from "../../../api/food"


class FoodEdit extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            errors: {},
            food: {
                name: "",
                protein: "",
                carbs: "",
                fat: "",
                fiber: "",
                sodium: "",
            },
            redirect: false,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDelete = this.onDelete.bind(this)

    }

    componentDidMount() {

        const id = this.props.match.params.id

        foodAPI.readOne(id)
            .then((response) => {

                let food = Object.assign(
                    {},
                    this.state.food,
                    response.data
                )

                this.setState({food})

            })
            .catch(() => {

                // console.log(error)

            })

    }

    onChange(name, value) {

        let food = this.state.food
        food[name] = value

        this.setState({food})

    }

    onSubmit(event) {

        event.preventDefault()

        const food = this.state.food
        const id = this.props.match.params.id

        foodAPI.update(id, food)
            .then(() => {

                this.setState({redirect: true})

            })
            .catch((error) => {

                const errors = error.response.data
                this.setState({errors})

            })

    }

    onDelete(event) {

        event.preventDefault()

        const id = this.props.match.params.id

        foodAPI.remove(id)
            .then(() => {

                this.setState({redirect: true})

            })
            .catch(() => {

                // console.log(error)

            })

    }

    render() {

        if(this.state.redirect) {
            return <Redirect to="/nutrition/food"/>
        }

        return (

            <div className="food-add">

                <FoodForm
                    update
                    food={this.state.food}
                    errors={this.state.errors}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    onDelete={this.onDelete}
                />

            </div>

        )

    }

}


FoodEdit.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }),
}


// export
export default FoodEdit
