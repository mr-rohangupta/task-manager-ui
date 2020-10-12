import axios from "axios";

export const loginUser = (data: any): any => {
    return axios.post('http://localhost:3000/users/login', data)
}

export const getTask = (): any => {
    return axios.get('http://localhost:3000/tasks', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const registerUser = (data: any) => {
    return axios.post('http://localhost:3000/users', data)
}