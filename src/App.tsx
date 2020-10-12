import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Login from "./containers/Login/Login";
import { globalContext } from './global-state-provider-hooks/global-state-provide';

function App() {
  const [userToken, setUserToken] = React.useState(null)
  const [user, setU] = React.useState(null)
  const setToken = (token: string | null) => {
    if (token) {
      console.log(token);

    }
    else {
      console.log('not found')
    }
  }
  const setUserr = (user: any) => {
    if (user) {
      setU(user)
    } else {

    }
  }
  const value = React.useMemo(() => ({ userToken, setUserToken: setToken, user, setUser: setUserr }), [
    userToken,
    setToken,
    user, setUserr
  ]);

  return (
    <globalContext.Provider value={value}>
      <div>
        <nav>

        </nav>
        <Switch>
          <Route path={'/'} exact component={Login} />
          <Route path={'/register'} exact component={Register} />
          <Route path={'/home'} exact component={Home} />
        </Switch>
      </div>
    </globalContext.Provider>
  )
}
export default withRouter(App);
