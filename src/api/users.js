import axios from "axios"


export function registerUser(data) {

    console.log(process.env.REACT_APP_API_URL)
    return axios.post("process.env.REACT_APP_API_URL/users", data)

}
