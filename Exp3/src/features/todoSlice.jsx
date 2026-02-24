import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload,
        status: "pending",
      };
      state.push(newTask);
    },
   
    deleteTask: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
   
    toggleStatus: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.status = todo.status === "pending" ? "done" : "pending";
      }
    },
  },
});

export const { addTask, deleteTask, toggleStatus } = todoSlice.actions;
export default todoSlice.reducer;
