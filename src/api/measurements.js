import axios from "axios"


export function add(data) {

    return axios.post(`${process.env.REACT_APP_API_URL}/measurements`, data)

}


export function read() {

    return axios.get(`${process.env.REACT_APP_API_URL}/measurements`)

}


// exports
export default {
    add,
    read,
}
