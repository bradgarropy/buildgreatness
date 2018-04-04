import React from "react"
import {Link} from "react-router-dom"

// style
import "./Navigation.css"

// material ui
import FlatButton from "material-ui/FlatButton"
import PersonAddIcon from "material-ui/svg-icons/social/person-add"
import HomeIcon from "material-ui/svg-icons/action/home"
import FitnessCenterIcon from "material-ui/svg-icons/places/fitness-center"
import EqualizerIcon from "material-ui/svg-icons/av/equalizer"
import MapsRestaurantIcon from "material-ui/svg-icons/maps/restaurant"
import FeedbackIcon from "material-ui/svg-icons/action/feedback"

// components
import Logo from "../common/Logo"


const Navigation = () => {

    return (

        <div className="navigation">

            <Logo/>

            <FlatButton
                label="home"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/"/>}
                icon={<HomeIcon/>}
            />

            <FlatButton
                label="register"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/register"/>}
                icon={<PersonAddIcon/>}
            />

            <FlatButton
                label="feedback"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/feedback"/>}
                icon={<FeedbackIcon/>}
            />

            <FlatButton
                label="training"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/training"/>}
                icon={<FitnessCenterIcon/>}
            />

            <FlatButton
                label="measurements"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/measurements"/>}
                icon={<EqualizerIcon/>}
            />

            <FlatButton
                label="nutrition"
                hoverColor="none"
                disableTouchRipple
                containerElement={<Link to="/nutrition"/>}
                icon={<MapsRestaurantIcon/>}
            />

        </div>

    )


}


// export
export default Navigation
