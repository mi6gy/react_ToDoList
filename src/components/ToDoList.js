import React from "react";
import Todo from "./Todo";

const ToDoList = ({ todos,setTodos, filteredTodos }) => {
    // console.log(todos);

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.text}
                        todo={todo}
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;
