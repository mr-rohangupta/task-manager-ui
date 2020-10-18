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

export const addTask = (data: any): any => {
    return axios({
        method: 'post',
        url: 'http://localhost:3000/tasks',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
        data
    });
}

export async function deleteTask(data: any) {
    return await axios({
        method: 'delete',
        url: 'http://localhost:3000/tasks' + '/' + data,
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
    });


}