import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './todoSlice';
import './App.css';

function App() {
  const [text, setText] = useState('');  
  const [editId, setEditId] = useState(null);  
  const { items, loading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos()); 
  }, [dispatch]);

  const handleAddOrUpdate = () => {
    if (!text.trim()) {
      alert('Please enter a task.');
      return;
    }
    if (editId) {
      dispatch(updateTodo({ id: editId, text }));
      setEditId(null);  
    } else {
      dispatch(addTodo(text));
    }
    setText('');  
  };

  const handleEdit = (todo) => {
    setText(todo.text);  
    setEditId(todo.id);  
  };

  return (
    <div className="app container mt-5">
      <h1 className="text-center mb-4">To-Do App</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAddOrUpdate} className="btn btn-primary">
          {editId ? 'Update Task' : 'Add Task'}
        </button>
      </div>
      {loading && <p className="text-center">Loading...</p>}
      <ul className="list-group">
        {items.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{todo.text}</span>
            <div>
              <button onClick={() => handleEdit(todo)} className="btn btn-warning btn-sm me-2">
                Edit
              </button>
              <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn btn-danger btn-sm">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
