import React, { useEffect, useState } from 'react';
import ToDoForm from './ToDoForm';

function EditToDo() {
    const [todo, setTodo] = useState();

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    useEffect(() => {
        setTodo({
            text: 'abc'
        })
    }, [])

    return (
        
        <div className='container'>
             <h3 className='mt-3'>Edit ToDo</h3>
              {todo ? <ToDoForm todo={todo} onSubmit={onSubmit}></ToDoForm> : <div>Loading</div>}
        </div>
       
    )
}

export default EditToDo
