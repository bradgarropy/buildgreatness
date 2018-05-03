import React from "react"
import PropTypes from "prop-types"

// components
import UserResetForm from "../user/UserResetForm"

// styles
import "./UserReset.css"

// api
import users from "../../api/users"


class UserReset extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            errors: {},
            form: {
                new_password: "",
                confirmation: "",
            },
            submitted: false,
            completed: false,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(name, value) {

        let form = this.state.form
        form[name] = value

        this.setState({form})

    }

    onSubmit(event) {

        event.preventDefault()

        this.setState({submitted: true})

        const data = {
            token: this.props.match.params.token,
            ...this.state.form,
        }

        users.reset(data)
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

            <div className="user-register">

                <h2>Password Reset</h2>

                {this.state.completed ?

                    <p>Your password has been reset!</p>

                    :

                    <UserResetForm
                        form={this.state.form}
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


UserReset.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            token: PropTypes.string,
        }),
    }),
}


// export
export default UserReset
