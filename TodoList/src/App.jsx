import React, { useState } from 'react'
import './App.css'

function Form({onAddTaskName}) {
  // setting default deisplay on form
  const [taskName, setTaskName]  = useState("")

  // Handles the input
  function handleTask(event) {
    setTaskName(event.target.value)
  }

  // Handles the submission of the form
  function handleSubmit(event) {
    event.preventDefault();
    // Adds the new task on the list of todos
    onAddTaskName(taskName);
    // Makes the form input area of the form to be empty after submission
    setTaskName('');
  }
  // JSX returned by the Form Component
  return (
    <form onSubmit={handleSubmit}>
      <label for="addTask"> Add Task: </label>
      <input type="text" onChange={handleTask} value={taskName}/>
      <button>submit</button>
    </form>
  )
}

function App() {
  // The todo lists
  const todoList = [{id: 1, name: "Practice Meditation"}, {id: 2, name: "Read a book"}]
  const [todos, setTodos] = useState(todoList);

  // Handling the addition of a task and it format in the todoList
  function handleAddTask(newTaskName) {
    const newTask = {id: Date.now(), name: newTaskName};
    setTodos((prevTodos) => [...prevTodos, newTask]);
  }

  // using map to display the required data
  const allTodos = todos.map((oneTodo) => {
    return (
      <div key={oneTodo.id}>
        <li>{ oneTodo.name }</li>
      </div>
    )
  })
  // The JSX to be returned by the App Component
  return (
    <>
      <Form onAddTaskName={handleAddTask}/>
      { allTodos }
    </>
  )
}

export default App;
