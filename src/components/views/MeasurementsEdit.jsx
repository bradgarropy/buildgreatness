import React from "react"
import PropTypes from "prop-types"
import {Redirect} from "react-router-dom"

// components
import MeasurementsForm from "../forms/MeasurementsForm"

// api
import measurements from "../../api/measurements"


class MeasurementsEdit extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            errors: {},
            measurement: {
                body_fat: "",
                bicep: "",
                calf: "",
                chest: "",
                date: undefined,
                quad: "",
                shoulder: "",
                waist: "",
                weight: "",
            },
            redirect: false,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    componentDidMount() {

        const id = this.props.match.params.id

        measurements.readOne(id)
            .then((response) => {

                let measurement = Object.assign(
                    {},
                    this.state.measurement,
                    response.data
                )
                measurement.date = new Date(measurement.date)

                this.setState({measurement})

            })
            .catch(() => {

                // console.log(error)

            })

    }

    onChange(name, value) {

        let measurement = this.state.measurement
        measurement[name] = value

        this.setState({measurement})

    }

    onSubmit(event) {

        event.preventDefault()

        const measurement = this.state.measurement
        const id = this.props.match.params.id

        measurements.update(id, measurement)
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
            return <Redirect to="/measurements"/>
        }

        return (

            <div className="measurements-add">

                <MeasurementsForm
                    measurement={this.state.measurement}
                    errors={this.state.errors}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />

            </div>

        )

    }

}


MeasurementsEdit.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }),
}


// export
export default MeasurementsEdit
