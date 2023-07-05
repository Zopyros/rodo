import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  const addTodo = todo => {
  };

  return (
    <div className="rodo-todo">
      <TodoForm onSubmit={addTodo} />
      
    </div>
  );
}

export default App;