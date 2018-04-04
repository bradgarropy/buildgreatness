import React from "react"
import PropTypes from "prop-types"

// style
import "./FeedbackForm.css"

// components
import TextArea from "../common/TextArea"
import RaisedButton from "material-ui/RaisedButton"


const FeedbackForm = (props) => (

    <div className="feedback-form">

        <h2>Feedback</h2>

        <div className="feedback-form-form">

            <TextArea
                label="Let us know what you think!"
                name="feedback"
                value={props.feedback}
                error={props.errors.feedback}
                onChange={props.onChange}
            />

            <RaisedButton
                type="submit"
                className="feedback-form-button"
                primary
                label="submit"
                onClick={props.onSubmit}
            />

        </div>


    </div>

)


FeedbackForm.propTypes = {
    feedback: PropTypes.string,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
}


// export
export default FeedbackForm
