import React from "react"
import {Redirect} from "react-router-dom"

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
            redirect: false,
            submitted: false,
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

                this.setState({redirect: true})

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

        if(this.state.redirect) {
            return <Redirect to="/"/>
        }

        return (

            <div className="feedback">

                <FeedbackForm
                    feedback={this.state.feedback}
                    errors={this.state.errors}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    disabled={this.state.submitted}
                />

            </div>

        )

    }

}


// export
export default Feedback
