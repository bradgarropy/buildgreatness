import axios from "axios"


export function register(data) {

    return axios.post(`${process.env.REACT_APP_API_URL}/users`, data)

}


export function login(data) {

    return axios.post(`${process.env.REACT_APP_API_URL}/users/login`, data)

}


export function readOne() {

    return axios.get(`${process.env.REACT_APP_API_URL}/users`)

}


export function update(data) {

    return axios.patch(`${process.env.REACT_APP_API_URL}/users`, data)

}


export function password(data) {

    return axios.post(`${process.env.REACT_APP_API_URL}/users/password`, data)

}


export function forgot(data) {

    return axios.post(`${process.env.REACT_APP_API_URL}/users/forgot`, data)

}


// exports
export default {
    register,
    login,
    readOne,
    update,
    password,
    forgot,
}
