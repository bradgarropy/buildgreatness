function isAuthenticated() {

    if(localStorage.getItem("token") === null) {
        return false
    }

    return true

}


// exports
export default {isAuthenticated}
