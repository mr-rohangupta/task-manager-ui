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