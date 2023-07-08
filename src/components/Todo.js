import React, {useState} from 'react'
import TodoForm from './TodoForm'

const [edit, setEdit] = useState({
    id:null,
    value:''
})
 
function Todo() {
  

  return todos.map((todo,index) => (
  <div
  className={todo.isComplete ? 'todo-row complete' : ' todo-row'}
  key ={index}
  >

    </div>
  ) )
    
  
}

export default Todo