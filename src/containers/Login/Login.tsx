import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { loginUser } from '../../reducers/actions';

export interface IValues {
    username: string,
    password: string
}

export interface IFormState {
    username: string,
    password: string,
    submitted: false
}

class Login extends React.Component<RouteComponentProps, any>{
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillReceiveProps(props: any) {
        if(props.isLoggedIn){
            this.props.history.push("/home");
        }
    }

    handleChange(e: any, param:string) {
       this.setState({[param]:e.target.value})
    }

    handleSubmit(e: any) {
        e.preventDefault();
        this.setState({ submitted: true })
        const { username, password } = this.state;
//        @ts-ignore
        this.props.onLogin({ email: username, password })
        
    }

    public render() {
        console.log(this.props)
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (this.state.submitted && !this.state.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={this.state.username} onChange={(e:any)=>this.handleChange(e,'username')} />
                        {this.state.submitted && !this.state.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (this.state.submitted && !this.state.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={(e:any)=>this.handleChange(e,'password')} />
                        {this.state.submitted && !this.state.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        {this.state.loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        )
    }

}
const mapStateToProps = (state: any) => ({ ...state })
const mapDispatchToProps = (dispatch: any) => ({
    onLogin: (data: any) => dispatch(loginUser(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
// export default withRouter(Login)