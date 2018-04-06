import axios from "axios"


export function register(data) {

    return axios.post(`${process.env.REACT_APP_API_URL}/users`, data)

}


export function login(data) {

    return axios.post(`${process.env.REACT_APP_API_URL}/users/login`, data)

}


export function readOne(id) {

    return axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`)

}


export function update(id, data) {

    return axios.patch(`${process.env.REACT_APP_API_URL}/users/${id}`, data)

}


// exports
export default {
    register,
    login,
    readOne,
    update,
}
