import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { addTask } from '../../UserService/ApiService';

type Inputs = {
    description: string,
    completed: string
};

function Task() {

    const { register, handleSubmit, errors } = useForm<Inputs>();
    const history = useHistory()

    const onSubmit = async ({ description, completed }: any) => {
        const { data } = await addTask({ description, completed })
        console.log(data)
        history.push('/home')
    }
    return (
        <div>
            <div className="NavContainer">
                <div className="NavHeader"></div>
            </div>

            <div className="col-md-6 col-md-offset-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Add Task</h2>
                        <div className="form-group">
                            <label htmlFor="name">Description</label>
                            <input type="text" className="form-control" name="description" ref={register({ required: true })} />
                            {errors.description && <span>This field is required</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Completed</label>
                            <input type="completed" className="form-control" name="completed" ref={register({ required: true })} />
                            {errors.completed && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input className="btn btn-primary" type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Task;