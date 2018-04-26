import React from "react"
import PropTypes from "prop-types"
import {Redirect} from "react-router-dom"

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
            redirect: false,
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

        const data = {
            token: this.props.match.params.token,
            ...this.state.form,
        }

        users.reset(data)
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
            return <Redirect to="/login"/>
        }

        return (

            <div className="user-register">

                <UserResetForm
                    form={this.state.form}
                    errors={this.state.errors}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />

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
