import React, { useState } from 'react';

function TodoForm() {
  const [input, setInput] = useState('');

  return (
    <form className='todo-form'>
      <input 
        type='text' 
        placeholder='Add todo' 
        value={input}
        name='text' 
        className='todo-input'
        onChange={(e) => setInput(e.target.value)}
      /> 
      <button>
        Add todo
      </button>
    </form>
  );
}

export default TodoForm;