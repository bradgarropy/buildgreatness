import axios from "axios"


const API_URL = "http://localhost:3001"


export function registerUser(data) {

    return axios.post(`${API_URL}/users`, data)

}
