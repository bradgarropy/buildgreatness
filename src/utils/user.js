// utils
import localstorage from "./localstorage"


function isAuthenticated() {

    const user = localstorage.user()

    if(!user) {

        return false

    }

    return true

}


// exports
export default {
    isAuthenticated,
}
