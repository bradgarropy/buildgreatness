import axios from "axios"


export function add(data) {

    return axios.post(`${process.env.REACT_APP_API_URL}/measurements`, data)

}


export function readAll() {

    return axios.get(`${process.env.REACT_APP_API_URL}/measurements`)

}


export function readOne(id) {

    return axios.get(`${process.env.REACT_APP_API_URL}/measurements/${id}`)

}


export function update(id, data) {

    return axios.patch(`${process.env.REACT_APP_API_URL}/measurements/${id}`, data)

}


// exports
export default {
    add,
    readAll,
    readOne,
    update,
}
