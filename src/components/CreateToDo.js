import React from 'react';
import ToDoForm from './ToDoForm';

function CreateToDo() {

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }

    return (
        <div className='container'>
                <h3 className='mt-3'>Create ToDo</h3>
                <ToDoForm onSubmit={onSubmit}></ToDoForm>               
        </div>
    )
}

export default CreateToDo
