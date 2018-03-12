import axios from "axios"


export function register(data) {

    return axios.post(`${process.env.REACT_APP_API_URL}/users`, data)

}


export function login(data) {

    return axios.post(`${process.env.REACT_APP_API_URL}/users/login`, data)

}


// exports
export default {
    register,
    login,
}
