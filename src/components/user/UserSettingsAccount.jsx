import React from "react"
import {Redirect} from "react-router-dom"

// components
import UserSettingsAccountForm from "./UserSettingsAccountForm"

// styles
import "./UserSettingsAccount.css"

// api
import users from "../../api/users"


class UserSettingsAccount extends React.Component {

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
            submitted: false,
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
                    response.data.user,
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

        this.setState({submitted: true})

        users.update(this.state.user)
            .then(response => {

                const user = response.data.user

                localStorage.setItem("user", JSON.stringify(user))

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

            <div className="user-settings-account">

                <UserSettingsAccountForm
                    user={this.state.user}
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
export default UserSettingsAccount
