import { useState } from 'react';
import './App.css';
import Todo from "./components/Todo";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);


  // Function that submits new item
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    // Makes sure input box it NOT empty.
    if (newTodo.length === 0) {
      return;
    }
    // Uses dictionary instead of array to organize each property.
    const todoItem = {
      text: newTodo,
      complete: false
    }

    // setTodos and pass in a brand new array containing all current todos plus 1 more (newTodo).
    setTodos([...todos, todoItem]);
    setNewTodo("");
  }

  // Function to delete todo item
  const handlerTodoDelete = (deleteIndex) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== deleteIndex;
    })
    setTodos(filteredTodos);
  }

  // Function to check off item
  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map ((todo, i) => {
      if(index === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <h2>Todo List:</h2>
      <form onSubmit={(event) => { handleNewTodoSubmit(event) }} >
        <input onChange={(event) => { setNewTodo(event.target.value) }} type="text" value={newTodo} />
        <div>
          <button className='btn-success mt-1'>Add Item</button>
        </div>
      </form>

      {todos.map((todo, i) => {
        return (
          <Todo 
          todo={todo} 
          key={i}
          i={i}
          handleToggleComplete={handleToggleComplete}
          handlerTodoDelete={handlerTodoDelete}/>
        );
      })}
    </div>
  );
}

export default App;
