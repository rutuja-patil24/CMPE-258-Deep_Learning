import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Add this line to include CSS for styling

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => {
        setTasks(response.data);
      });
  }, []);

  const addTask = () => {
    if (newTask.trim() === '') return; // Prevent adding empty tasks
    axios.post('http://localhost:5000/tasks', { id: tasks.length + 1, text: newTask })
      .then(response => {
        setTasks([...tasks, response.data]);
        setNewTask('');
      });
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task.id !== id));
      });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>To-Do List</h1>
      </header>
      <div className="input-section">
        <input 
          type="text" 
          placeholder="Enter a new task..." 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          className="task-input"
        />
        <button onClick={addTask} className="add-task-button">Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} className="delete-task-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
