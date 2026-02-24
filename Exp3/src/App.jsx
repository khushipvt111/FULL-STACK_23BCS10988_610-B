import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, toggleStatus } from "./features/todoSlice";

function App() {
  const [input, setInput] = useState("");

  const tasks = useSelector((state) => state.todoList); 

  const dispatch = useDispatch();

  return (
   <>
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 color="blue">To-Do List </h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
      />
      <button
        onClick={() => {
          dispatch(addTask(input));
          setInput("");
        }}
      >
        Add
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ margin: "10px 0" }}>
            <span
              style={{
                textDecoration:
                  task.status === "done" ? "line-through" : "none",
              }}
            >
              {task.title} - <strong>{task.status}</strong>
            </span>

            <button onClick={() => dispatch(toggleStatus(task.id))}>
              Toggle
            </button>
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      
    </div>
    </>
  );
}

export default App;
