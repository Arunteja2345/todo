import React from 'react';
import {useState} from 'react';


function TodoForm({ addtodo }){
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addtodo(value);
        setValue('');
    };



    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            className='input'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='add a new task'
            />
        </form>
    );
}
export default TodoForm;