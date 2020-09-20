import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { registerUser } from "../../reducers/actions";

type Inputs = {
    name: string,
    email: string,
    password: string
};


function Register(props: any) {
    const { register, handleSubmit, errors } = useForm<Inputs>();
    const onSubmit = (data: any) => { props.onRegister(data) };

    useEffect(() => {
        if (props.isLoggedIn) {
            props.history.push("/home")
        }
    }, [props])

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" ref={register({ required: true })} />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" name="email" ref={register({ required: true })} />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" ref={register({ required: true })} />
                    {errors.password && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <input className="btn btn-primary" type="submit" />
                </div>
            </div>
        </form>
    );
}

const mapStateToProps = (state: any) => ({ ...state })
const mapDispatchToProps = (dispatch: any) => ({
    onRegister: (data: any) => dispatch(registerUser(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Register)