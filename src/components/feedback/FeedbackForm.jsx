import React from "react"
import PropTypes from "prop-types"

// style
import "./FeedbackForm.css"

// components
import TextArea from "../common/TextArea"
import RaisedButton from "material-ui/RaisedButton"


const FeedbackForm = (props) => (

    <div className="feedback-form">

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
                disabled={props.disabled}
            />

        </div>


    </div>

)


FeedbackForm.propTypes = {
    feedback: PropTypes.string,
    errors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    disabled: PropTypes.bool,
}


// export
export default FeedbackForm
