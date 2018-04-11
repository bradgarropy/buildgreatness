import React from "react"
import {Redirect} from "react-router-dom"

// components
import UserForgotForm from "../user/UserForgotForm"

// styles
import "./UserForgot.css"

// api
import users from "../../api/users"


class UserForgot extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            errors: {},
            user: {
                email: "",
            },
            redirect: false,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(name, value) {

        let user = this.state.user
        user[name] = value

        this.setState({user})

    }

    onSubmit(event) {

        event.preventDefault()

        users.forgot(this.state.user)
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

            <div className="user-forgot">

                <UserForgotForm
                    user={this.state.user}
                    errors={this.state.errors}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />

            </div>

        )

    }

}


// export
export default UserForgot
