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
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(name, value) {

        this.setState({[name]: value})

    }

    onSubmit(event) {

        event.preventDefault()

        feedback.send({feedback: this.state.feedback})
            .then(() => {

                this.setState({redirect: true})

            })
            .catch(error => {

                const errors = error.response.data
                this.setState({errors})

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
                />

            </div>

        )

    }

}


// export
export default Feedback
