import { User,Task } from "../app-types";

export const user: User = {
    username: '',
    password: '',
    token: '',
    isSubmitted: false
};

export const task: Task = {
    completed: '',
    _id: '',
    description: '',
    owner: '',
    createdAt: '',
    updatedAt: '',
    __v: ''
}
