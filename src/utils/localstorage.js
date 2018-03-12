function user() {

    let user = localStorage.getItem("user")
    user = JSON.parse(user)

    return user

}

function token() {

    const token = localStorage.getItem("token")
    return token

}


// exports
export default {
    user,
    token,
}
