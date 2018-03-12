import React from "react"
import {Link} from "react-router-dom"

// material ui
import FlatButton from "material-ui/FlatButton"
import AccountBoxIcon from "material-ui/svg-icons/action/account-box"


const User = () => {

    return (

        <div className="guest-button">

            <FlatButton
                label="login"
                labelPosition="before"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/login"/>}
                icon={<AccountBoxIcon/>}
            />

        </div>

    )

}


// export
export default User
