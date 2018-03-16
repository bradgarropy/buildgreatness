import React from "react"
import {Redirect} from "react-router-dom"

// components
import MeasurementsForm from "../forms/MeasurementsForm"

// api
import measurements from "../../api/measurements"


class Measurements extends React.Component {

    constructor(props) {

        super(props)

        const date = new Date()
        date.setHours(0, 0, 0, 0)

        this.state = {
            errors: {},
            measurement: {
                body_fat: "",
                bicep: "",
                calf: "",
                chest: "",
                date,
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

    onChange(name, value) {

        let measurement = this.state.measurement
        measurement[name] = value

        this.setState({measurement})

    }

    onSubmit(event) {

        event.preventDefault()

        let measurement = Object.assign({}, this.state.measurement)

        Object.keys(measurement).forEach((key) => {

            if(!measurement[key]) {
                delete measurement[key]
            }

        })

        measurements.add(measurement)
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

            <div className="measurements">

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


// export
export default Measurements
