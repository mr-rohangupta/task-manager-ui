import { IAction, User } from "../app-types";
import * as actionTypes from "./action-types";

export default (state: User,action: IAction) => {
    switch(action.type){
        case actionTypes.GET_TASKS_LIST: {
            console.log("Inside Get Task")
        } 
        case actionTypes.LOGIN: {
            console.log("Inside Login");
        }
    }
}