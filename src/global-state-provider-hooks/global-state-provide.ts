import * as React from "react";

const globalContext = React.createContext<{ userToken: string | null, setUserToken(val?: string | null): void, user: any, setUser(val?: any): void }>({
    userToken: null,
    setUserToken: () => void {},
    user: null,
    setUser: () => void {}
});


export function useUser() {
    const context = React.useContext(globalContext);
    if (!context) {
        throw new Error('UserContext must be used within UserProvider!');
    }
    return context;
}
/* 
const GlobalContextProvider: React.SFC = ({ children }) => {
    const [state, dispatch] = React.useReducer(rootReducer, user);
    return <globalContext.Provider value={ { state, dispatch } }> { children } < /globalContext.Provider>
} */

export { globalContext };