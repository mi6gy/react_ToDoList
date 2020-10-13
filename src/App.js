import React, { useState } from "react";
import './App.css';
import Form from  "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const[inputText, setInputText] = useState ("");
  const [todos, setTodos] = useState ([]);
  const [status, setStatus] = useState ("all");

  return (
    <div className="App">
      <header>
        <h1>To Do Lists:</h1>
        </header>
      <Form todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      inputText={inputText}
      setStatus={setStatus}
      />
      <ToDoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
