import React from "react"
import PropTypes from "prop-types"
import {Redirect} from "react-router-dom"

// components
import MealsForm from "./MealsForm"

// api
import mealsAPI from "../../../api/meals"


class MealsEdit extends React.Component {

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
        this.onDelete = this.onDelete.bind(this)

    }

    componentDidMount() {

        const id = this.props.match.params.id

        mealsAPI.readOne(id)
            .then((response) => {

                let meal = Object.assign(
                    {},
                    this.state.meal,
                    response.data
                )

                this.setState({meal})

            })
            .catch(() => {

                // console.log(error)

            })

    }

    onChange(name, value) {

        let meal = this.state.meal
        meal[name] = value

        this.setState({meal})

    }

    onSubmit(event) {

        event.preventDefault()

        const meal = this.state.meal
        const id = this.props.match.params.id

        mealsAPI.update(id, meal)
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

        mealsAPI.remove(id)
            .then(() => {

                this.setState({redirect: true})

            })
            .catch(() => {

                // console.log(error)

            })

    }

    render() {

        if(this.state.redirect) {
            return <Redirect to="/nutrition/meals"/>
        }

        return (

            <div className="meals-edit">

                <h2>Meals Edit</h2>

                <MealsForm
                    update
                    meal={this.state.meal}
                    errors={this.state.errors}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    onDelete={this.onDelete}
                />

            </div>

        )

    }

}


MealsEdit.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }),
}


// export
export default MealsEdit
