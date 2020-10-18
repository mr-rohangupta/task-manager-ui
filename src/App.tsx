import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Login from "./containers/Login/Login";
import { globalContext } from './global-state-provider-hooks/global-state-provide';
import { ThemeProvider } from "@chakra-ui/core";
import customTheme from './theme';
import styled from "styled-components";
import Task from './components/Task';

const NavHeader = styled.div`
  width: 20%;
  float: left;
  padding: 10px;
`;

function App() {
  const [userToken, setUserToken] = React.useState(null)

  const [user, setUserProfile] = React.useState(null)

  const setToken = (token: string | null) => {
    if (token) {
      console.log("Token Present Setting In Set Token")
    }
    else {
      console.log('No Token Found Unable to set..')
    }
  }

  const setUserData = (user: any) => {
    if (user) {
      setUserProfile(user)
    } else {
    }
  }
  const value = React.useMemo(() => ({ userToken, setUserToken: setToken, user, setUser: setUserData }), [
    userToken,
    setToken,
    user,
    setUserData
  ]);

  return (
    <globalContext.Provider value={value}>
      <ThemeProvider theme={customTheme}>
        <div>
          <Switch>
            <Route path={'/'} exact component={Login} />
            <Route path={'/register'} exact component={Register} />
            <Route path={'/home'} exact component={Home} />
            <Route path={'/task'} exact component={Task} />
          </Switch>
        </div>
      </ThemeProvider>
    </globalContext.Provider>
  )
}
export default withRouter(App);
