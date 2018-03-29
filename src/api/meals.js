import axios from "axios"


export function add(data) {

    return axios.post(`${process.env.REACT_APP_API_URL}/meals`, data)

}


export function readAll() {

    return axios.get(`${process.env.REACT_APP_API_URL}/meals`)

}


export function readOne(id) {

    return axios.get(`${process.env.REACT_APP_API_URL}/meals/${id}`)

}


export function update(id, data) {

    return axios.patch(`${process.env.REACT_APP_API_URL}/meals/${id}`, data)

}


export function remove(id) {

    return axios.delete(`${process.env.REACT_APP_API_URL}/meals/${id}`)

}


// exports
export default {
    add,
    readAll,
    readOne,
    update,
    remove,
}
