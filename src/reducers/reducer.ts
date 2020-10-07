const defaultState = {
    name: '',
    pwd: '',
    Authorization: ''
}
const reducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case 'SET_TOKEN':

            return {
                ...state,
                userData: action.payload,
                isLoggedIn: true
            };

        case 'GET_USERS':
            return {
                ...state,
                getUsers: action.payload
            }

        default:
            return {
                ...state
            }
            break;
    }
}
export default reducer;