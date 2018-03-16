import axios from "axios"

// utils
import localstorage from "./localstorage"


function headers() {

    const token = localstorage.token()

    if(token) {

        axios.defaults.headers.common.Authorization = `Bearer ${token}`

    }
    else {

        delete axios.defaults.headers.common.Authorization

    }

    return

}


// exports
export default {
    headers,
}
