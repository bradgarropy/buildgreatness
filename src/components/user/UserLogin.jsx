import React from "react"
import PropTypes from "prop-types"
import {Redirect} from "react-router-dom"
import {Link} from "react-router-dom"

// material ui
import FlatButton from "material-ui/FlatButton"

// components
import UserLoginForm from "../user/UserLoginForm"

// api
import users from "../../api/users"

// utils
import authorization from "../../utils/authorization"

// styles
import "./UserLogin.css"


class UserLogin extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            errors: {},
            credentials: {
                email: "",
                password: "",
            },
            submitted: false,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(name, value) {

        let credentials = this.state.credentials
        credentials[name] = value

        this.setState({credentials})

    }

    onSubmit(event) {

        event.preventDefault()

        this.setState({submitted: true})

        users.login(this.state.credentials)
            .then((response) => {

                const user = response.data.user
                const token = response.data.token

                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", JSON.stringify(token))

                authorization.headers()

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

        const redirect = this.props.location.state
            ? this.props.location.state.referrer
            : "/"

        if(this.state.redirect) {
            return <Redirect to={redirect}/>
        }

        return (

            <div className="user-login">

                <UserLoginForm
                    credentials={this.state.credentials}
                    errors={this.state.errors}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    disabled={this.state.submitted}
                />

                <FlatButton
                    label="forgot your password?"
                    hoverColor="none"
                    disableTouchRipple
                    containerElement={<Link to="/forgot"/>}
                />

            </div>

        )

    }

}


UserLogin.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.shape({
            referrer: PropTypes.string,
        }),
    }),
}


// export
export default UserLogin
