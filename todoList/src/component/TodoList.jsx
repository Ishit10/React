import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const TodoList = () => {
  const [textInput, setTextInput] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasksData")) || []
  );
  const [editButton, setEditButton] = useState(false);
  const [taskIndex, setTaskIndex] = useState(null);



  const handleAdd = () => {
    if (textInput.trim() === "") {
      alert("Please, Enter some Task");
      return;
    }
    setTasks([textInput, ...tasks]);
    setTextInput("");
  }

  const handleSave = () => {
    if (textInput.trim() ===""){
      alert("task can't br empty");
      return;
    }
    const updateTasks = tasks.map((task, i) => (i === taskIndex ? textInput : task));
    setTasks(updateTasks);
    setEditButton(false);
    setTextInput("");
  }


  const handleEdit = (index) => {
    setTextInput(tasks[index]);
    setTaskIndex(index);
    setEditButton(true);
  };

  const handleDelete = (index) => {
    const updateTasks = tasks.filter((_,i) => i !== index);
    setTasks(updateTasks);
  }



  useEffect(() => {
    localStorage.setItem("tasksdata", JSON.stringify(tasks))
  }, [tasks]);

  return (
    <>
    <div className='bg-danger-subtle d-flex justify-content-center align-items-center flex-column' style={{height:"838px"}}>
      <div className='d-flex justify-content-center   gap-3'>
        <input style={{width:"300px"}} className='border-0 rounded-1 p-2'  type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder='Enter Tasks' />
        { editButton ? (
          <button className='border-0 rounded-1'style={{width:"70px"}} onClick={handleSave}>save</button>
        ) : (
          <button className='border-0 rounded-1' style={{width:"70px"}} onClick={handleAdd}>Add</button>
        )}
</div>

        <ul className='my-3 text-decoration-none'>
          {tasks.map((task, index) =>(
            <li style={{listStyle:"none"}} key={index}>
              <p className='text-center'>{task}</p>
              <button style={{width:"100px"}} className='border-1' onClick={()=> handleEdit(index)}>Edit</button>
              <button style={{width:"100px"}} className='border-1' onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>

        
      </div>

     
    </>
  )
}

export default TodoList