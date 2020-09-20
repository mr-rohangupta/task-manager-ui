const defaultState = {
    name: '',
    pwd: ''
}
const reducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case 'SET_TOKEN':

            return {
                ...state,
                userData:action.payload,
                isLoggedIn:true
            };

        default:
            return {
                ...state
            }
            break;
    }
}
export default reducer;