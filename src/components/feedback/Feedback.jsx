import React from "react"

// components
import FeedbackForm from "./FeedbackForm"

// style
import "./Feedback.css"

// api
import feedback from "../../api/feedback"


class Feedback extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            errors: {},
            feedback: "",
            submitted: false,
            completed: false,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(name, value) {

        this.setState({[name]: value})

    }

    onSubmit(event) {

        event.preventDefault()

        this.setState({submitted: true})

        feedback.send({feedback: this.state.feedback})
            .then(() => {

                this.setState({completed: true})

            })
            .catch(error => {

                const errors = error.response.data

                this.setState({
                    errors,
                    submitted: false,
                })

            })

    }

    render() {

        return (

            <div className="feedback">

                <h2>Feedback</h2>

                {this.state.completed ?

                    <p>Thank you for your feedback!</p>

                    :

                    <FeedbackForm
                        feedback={this.state.feedback}
                        errors={this.state.errors}
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                        disabled={this.state.submitted}
                    />

                }

            </div>

        )

    }

}


// export
export default Feedback
