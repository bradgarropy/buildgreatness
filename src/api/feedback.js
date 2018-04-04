import axios from "axios"


export function send(data) {

    return axios.post(`${process.env.REACT_APP_API_URL}/feedback`, data)

}


// exports
export default {
    send,
}
