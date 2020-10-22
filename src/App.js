import React, { useState,useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {

  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // use effect
 useEffect(()=> {
   filterHandler();
   saveLocalTodos();
 },[todos,status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todos => todos.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todos => todos.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  const saveLocalTodos = () => {
    if(localStorage.getItem("todos")=== null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

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
      <ToDoList
      filteredTodos={filteredTodos} 
      setTodos={setTodos}
       todos={todos}
       />
    </div>
  );
}

export default App;
