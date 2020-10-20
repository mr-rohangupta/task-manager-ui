import * as React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import { updateTask } from '../../UserService/ApiService';

type Inputs = {
    description: string,
    completed: string,
    id: string
};

export const EditTaskModal = ({ closeModal, description, completed, _id }: { closeModal?: () => void, description?: string, completed?: string, _id?: string }) => {
    const { register, handleSubmit, errors } = useForm<Inputs>({ defaultValues: { description: description, completed: completed } });
    const history = useHistory()
    const [isOpen, setIsOpen] = React.useState(false)


    const customStyles = {
        content: {
            left: '20%',
            right: '20%',
            bottom: "auto"
        }
    };
    const onSubmit = async ({ description, completed }: any) => {
        const { data } = await updateTask({ description, completed, id: _id })
        console.log(data)
        closeModal?.()
        history.push('/home')
    }

    return <Modal style={customStyles} isOpen={true} shouldCloseOnOverlayClick={true} shouldCloseOnEsc={true}>
        <div className="invoice-modal-cont">
            <h3 className="mtb-0">Edit Task</h3>
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
            <button type="button" onClick={closeModal} >Close</button>
        </div>
    </Modal>
}

export default EditTaskModal;