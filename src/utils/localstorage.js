function user() {

    let user = localStorage.getItem("user")
    user = JSON.parse(user)

    return user

}

function token() {

    let token = localStorage.getItem("token")
    token = JSON.parse(token)

    return token

}


// exports
export default {
    user,
    token,
}
