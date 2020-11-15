import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';


function ToDoForm({ todo, onSubmit }) {
    const {register, handleSubmit} = useForm({defaultValues: {text: todo ? todo.text : ''}});
    const history = useHistory();


    const submitHandler = handleSubmit((data) => {
        onSubmit(data);
        history.push('/');
    })


    return (
            <form className='form-group' onSubmit={submitHandler}>
                <label htmlFor='text' className='mt-3'>Add Todo Item Name</label>
                <input ref={register} type='text' name='text' className='form-control mt-3'></input>
                <button type='submit' className='btn btn-primary mt-3'>Save ToDo</button>
            </form>
    )
}

export default ToDoForm
