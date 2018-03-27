import React from "react"
import PropTypes from "prop-types"
import {Route} from "react-router-dom"
import {Redirect} from "react-router-dom"

// utils
import user from "../../utils/user"


const ProtectedRoute = ({component: Component, ...props}) => {

    if(!user.isAuthenticated()) {

        return (

            <Redirect
                to={{
                    pathname: "/login",
                    state: {referrer: props.location.pathname},
                }}
            />

        )

    }

    return <Route component={Component} {...props}/>

}


ProtectedRoute.propTypes = {
    component: PropTypes.func,
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
}


// export
export default ProtectedRoute
