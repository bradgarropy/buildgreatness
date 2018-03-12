import React from "react"
import {Link} from "react-router-dom"

// style
import "../css/Navigation.css"

// material ui
import FlatButton from "material-ui/FlatButton"
import FilterOne from "material-ui/svg-icons/image/filter-1"
import FilterTwo from "material-ui/svg-icons/image/filter-2"
import FilterThree from "material-ui/svg-icons/image/filter-3"
import FilterFour from "material-ui/svg-icons/image/filter-4"

// components
import Logo from "./Logo"


const Navigation = (props) => {

    return (

        <div className="navigation">

            <Logo/>

            <FlatButton
                label="home"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/"/>}
                icon={<FilterOne/>}
            />

            <FlatButton
                label="register"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/register"/>}
                icon={<FilterTwo/>}
            />

            <FlatButton
                label="login"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/login"/>}
                icon={<FilterThree/>}
            />

            <FlatButton
                label="protected"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/protected"/>}
                icon={<FilterFour/>}
            />

        </div>

    )


}


// export
export default Navigation
