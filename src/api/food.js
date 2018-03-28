import axios from "axios"


export function add(data) {

    return axios.post(`${process.env.REACT_APP_API_URL}/food`, data)

}


export function readAll() {

    return axios.get(`${process.env.REACT_APP_API_URL}/food`)

}


export function readOne(id) {

    return axios.get(`${process.env.REACT_APP_API_URL}/food/${id}`)

}


export function update(id, data) {

    return axios.patch(`${process.env.REACT_APP_API_URL}/food/${id}`, data)

}


export function remove(id) {

    return axios.delete(`${process.env.REACT_APP_API_URL}/food/${id}`)

}


// exports
export default {
    add,
    readAll,
    readOne,
    update,
    remove,
}
