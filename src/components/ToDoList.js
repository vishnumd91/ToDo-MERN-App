import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ToDoList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(
            [
                {text: 'abc', id: 0},
                {text: 'def', id: 1},
            ]
        )
    }, [])
    return (
        <div className='container'>
            <div className='mt-3'>
                <h3>Todo List</h3>
                <table className='table table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Tasks</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    
                        {
                            items.map(todo => {
                                console.log('Items =>', items);
                                return(
                                    <tbody>
                                    <tr key={todo.id}>
                                        <td>{todo.text}</td>
                                        <td>
                                            <Link to={'/edit/${todo.id}'}>Edit</Link>
                                        </td>
                                    </tr>
                                </tbody>
                                )
                            })
                        }
                </table>
            </div>
        </div>
    )
}

export default ToDoList
