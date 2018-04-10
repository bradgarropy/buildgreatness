import React from "react"
import PropTypes from "prop-types"
import {Redirect} from "react-router-dom"
import {Link} from "react-router-dom"

// material ui
import FlatButton from "material-ui/FlatButton"
import ExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more"
import Popover from "material-ui/Popover"
import Menu from "material-ui/Menu"
import MenuItem from "material-ui/MenuItem"
import Divider from "material-ui/Divider"

// utils
import authorization from "../../utils/authorization"


class UserAuthenticatedButton extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            anchor: null,
            open: false,
            redirect: false,
        }

        this.onClick = this.onClick.bind(this)
        this.onRequestClose = this.onRequestClose.bind(this)
        this.onLogout = this.onLogout.bind(this)

    }

    onClick(event) {

        this.setState({
            open: true,
            anchor: event.currentTarget,
        })

    }

    onRequestClose() {

        this.setState({open: false})

    }

    onLogout() {

        localStorage.removeItem("user")
        localStorage.removeItem("token")

        authorization.headers()

        this.setState({redirect: true})

    }

    render() {

        if(this.state.redirect) {
            return <Redirect to="/"/>
        }

        return (

            <div className="user-button">

                <FlatButton
                    label={this.props.user.first_name}
                    labelPosition="before"
                    hoverColor="none"
                    disableTouchRipple
                    onClick={this.onClick}
                    icon={<ExpandMoreIcon/>}
                />

                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchor}
                    anchorOrigin={{"horizontal": "right", "vertical": "bottom"}}
                    targetOrigin={{"horizontal": "right", "vertical": "top"}}
                    onRequestClose={this.onRequestClose}
                >
                    <Menu>
                        <MenuItem
                            primaryText="Account"
                            containerElement={<Link to="/settings/account"/>}
                            onClick={this.onRequestClose}
                        />
                        <MenuItem
                            primaryText="Password"
                            containerElement={<Link to="/settings/password"/>}
                            onClick={this.onRequestClose}
                        />
                        <Divider/>
                        <MenuItem
                            primaryText="Logout"
                            onClick={this.onLogout}
                        />
                    </Menu>
                </Popover>

            </div>

        )

    }

}

UserAuthenticatedButton.propTypes = {
    user: PropTypes.shape({
        first_name: PropTypes.string,
    }),
}


// export
export default UserAuthenticatedButton
