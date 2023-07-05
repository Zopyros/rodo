import React, {useState} from 'react';
import TodoForm from './TodoForm';

function TodoList(){
  const [todos,setTodos] = useState([])

  const addTodo = todo => {
    if (todo.text && !/^\s*$/.test(todo.text)) {
      const newTodos = [todo, ...todos];
      setTodos(newTodos);
      console.log(...newTodos);
    }
  };

return (
  <div>
    <h1> Whats the plan for today?</h1>
    <TodoForm onSubmit={addTodo}/>
  </div>
)

}

export default TodoList;