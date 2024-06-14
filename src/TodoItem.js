import React from "react";
function TodoItem({todo, index, toggleTodo, deleteTodo}){
    return (
        <li style={{textDecoration : todo.completed ? 'line-through' : ''}}>
            {todo.text}
            <button onClick={() => toggleTodo(index)}>
                {todo.completed ? 'undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
    );
}
export default TodoItem;