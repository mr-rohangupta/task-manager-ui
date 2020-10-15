import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../global-state-provider-hooks/global-state-provide';
import { loginUser } from '../../UserService/ApiService';

type Inputs = {
    username: string,
    password: string,
    submitted: false
};

function Login() {
    const [, setIsSubmitted] = React.useState(false);
    const { setUserToken, setUser } = useUser()
    const history = useHistory()
    
    const { register, handleSubmit, errors } = useForm<Inputs>();

    const onSubmit = async ({ username, password }: any) => {
        const { data } = await loginUser({ email: username, password })
        console.log(data)
        setUserToken(data.token)
        localStorage.setItem('token', data.token)
        setIsSubmitted(true);
        setUser(data.user)
        history.push('/home')
    }


    return (
        <div className="col-md-6 col-md-offset-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="username" ref={register({ required: true })} />
                        {errors.username && <span>This field is required</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" ref={register({ required: true })} />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" />   
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </div>
            </form>
        </div>
    )


}

export default Login;