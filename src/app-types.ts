export interface User{
    username: string,
    password: string,
    token: string,
    isSubmitted: boolean
}

export interface IAction{
    type: string,
    [key:string]: any
}

export interface Task{
    completed: string,
    _id: string,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
    __v: string
}