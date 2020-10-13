import React, { useState } from "react";
import './App.css';
import Form from  "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const[inputText, setInputText] = useState ("");
  const [todos, setTodos] = useState ([]);

  return (
    <div className="App">
      <header>
        <h1>Hello world</h1>
        </header>
      <Form todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      inputText={inputText}
      />
      <ToDoList/>
    </div>
  );
}

export default App;
