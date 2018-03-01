import axios from "axios"


export function registerUser() {

    return axios.post(`${process.env.REACT_APP_API_URL}/users`, data)

}
