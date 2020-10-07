import axios from 'axios';
export const loginUser = (data: any) => {
    return (dispatch: any) => {
        //   TODO: dispatch lodader action
        return axios.post('http://localhost:3000/users/login', data).then(res => dispatch({ type: "SET_TOKEN", payload: res }))
            .catch(err => console.log(err))
    }
}

export const registerUser = (data: any) => {
    return (dispatch: any) => {
        return axios.post('http://localhost:3000/users', data).then(res => dispatch({ type: "SET_TOKEN", payload: res }))
            .catch(err => console.log(err))
    }
}

export const getUsers = (data: any) => {
    return (dispatch: any) => {
        return axios.get('http://localhost:3000/tasks', {
            headers: {
                'Authorization': 'Bearer ' + data.data.token
            }
        }).then(res => dispatch({ type: "GET_USERS", payload: res }))
            .catch(err => console.log(err))
    }
}

