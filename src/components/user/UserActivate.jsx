import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

// api
import users from "../../api/users"

// styles
import "./UserActivate.css"

// material ui
import RaisedButton from "material-ui/RaisedButton"

// components
import Loading from "../common/Loading"


class UserActivate extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            loading: true,
        }

    }

    componentDidMount() {

        const data = {token: this.props.match.params.token}

        users.activate(data)
            .then(() => {

                this.setState({loading: false})

            })
            .catch(() => {

                // console.log(error)

            })

    }

    render() {

        return (

            <div className="user-activate">

                {this.state.loading ?

                    <Loading/>

                    :

                    <React.Fragment>
                        <p>Your account has been activated, now get started!</p>

                        <RaisedButton
                            className="user-activate-button"
                            primary
                            label="login"
                            containerElement={<Link to="/login"/>}
                        />
                    </React.Fragment>

                }

            </div>

        )

    }

}


UserActivate.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            token: PropTypes.string,
        }),
    }),
}


// export
export default UserActivate
