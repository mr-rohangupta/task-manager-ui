import * as React from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Register from './components/register';
import Login  from "./containers/Login/Login";


class App extends React.Component<RouteComponentProps<any>>{
  public render() {
    return (
      <div>
        <nav>
      
        </nav>
        <Switch>
          <Route path={'/'} exact component={Login}/>
          <Route path={'/register'} exact component={Register}/>
          <Route path={'/home'} exact component={Home}/>
        </Switch>
      </div>
    )
  }
}
export default withRouter(App);
