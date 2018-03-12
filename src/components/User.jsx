import React from "react"

// styles
import "../css/User.css"

// utils
import localstorage from "../utils/localstorage"

// components
import GuestButton from "./buttons/GuestButton"
import UserButton from "./buttons/UserButton"


const User = () => {

    const user = localstorage.user()

    const button = user
        ? <UserButton user={user}/>
        : <GuestButton/>

    return (

        <div className="user">
            {button}
        </div>

    )

}


// export
export default User
