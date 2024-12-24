import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { create, update, deleteItem, clearAll } from './Redux/Feature/crudSlice';

function App() {
  const [text, setText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const dispatch = useDispatch();
  const toDoData = useSelector((state) => state.todolist.todolist);

  const handleSubmit = () => {
    if (!text.trim()) return; // Prevent empty submissions
    if (isEditing) {
      dispatch(update({ index: currentIndex, newText: text }));
      setIsEditing(false);
    } else {
      dispatch(create(text));
    }
    setText('');
  };

  const handleEdit = (index) => {
    setText(toDoData[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleDelete = (index) => {
    dispatch(deleteItem(index));
  };

  const handleClearAll = () => {
    dispatch(clearAll());
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={isEditing ? 'Update task...' : 'Add a new task...'}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={handleSubmit}>{isEditing ? 'Update' : 'Add'}</button>
        <button className="clear" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
      <div>
        {toDoData.length > 0 ? (
          toDoData.map((todo, index) => (
            <div className="todo-item" key={index}>
              <span>{todo}</span>
              <button className="edit" onClick={() => handleEdit(index)}>
                Edit
              </button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No tasks available. Start adding some!</p>
        )}
      </div>
    </div>
  );
}

export default App;
