import React from "react"
import {Redirect} from "react-router-dom"
import jwtdecode from "jwt-decode"

// components
import UserSettingsForm from "./UserSettingsForm"

// styles
import "./UserSettings.css"

// api
import users from "../../api/users"

// utils
import authorization from "../../utils/authorization"


class UserSettings extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            errors: {},
            user: {
                first_name: "",
                last_name: "",
                email: "",
            },
            redirect: false,
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    componentDidMount() {

        users.readOne()
            .then(response => {

                let user = Object.assign(
                    {},
                    this.state.user,
                    response.data
                )

                this.setState({user})

            })
            .catch(() => {

                // console.log(error)

            })

    }

    onChange(name, value) {

        let user = this.state.user
        user[name] = value

        this.setState({user})

    }

    onSubmit(event) {

        event.preventDefault()

        users.update(this.state.user)
            .then(response => {

                const token = response.data.token
                let user = jwtdecode(token)

                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", JSON.stringify(token))

                authorization.headers()

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

            <div className="user-settings">

                <UserSettingsForm
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
export default UserSettings
