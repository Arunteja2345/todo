import React from 'react';
import {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';
function App(){
  const [todos, setTodos] = useState([]);
  const addtodo = (todo) => {
    setTodos([...todos, {text: todo, completed: false}]);
  };
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className='App'>
      <h1>TodoList</h1>
      <TodoForm addtodo={addtodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
export default App;