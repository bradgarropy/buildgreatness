import React from "react"

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
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {

                const errors = error.response.data
                this.setState({errors})

            })

    }

    render() {

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
