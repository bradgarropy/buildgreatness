import axios from "axios"


export function add(data) {

    return axios.post(`${process.env.REACT_APP_API_URL}/measurements`, data)

}


// exports
export default {
    add,
}
