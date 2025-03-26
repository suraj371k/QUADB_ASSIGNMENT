import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Load tasks from localStorage
const loadTasksFromStorage = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

// Save tasks to localStorage
const saveTasksToStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Fetch todos 
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(`${API_URL}?_limit=5`);
  return response.data;
});
//add task
export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
});
//delete task
export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: loadTasksFromStorage(),
    status: "idle",
    error: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
      saveTasksToStorage(state.items);
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
      saveTasksToStorage(state.items);
    },
    updateTaskPriority: (state, action) => {
      const task = state.items.find((todo) => todo.id === action.payload.id);
      if (task) task.priority = action.payload.priority;
      saveTasksToStorage(state.items);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        saveTasksToStorage(state.items);
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
        saveTasksToStorage(state.items);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo.id !== action.payload);
        saveTasksToStorage(state.items);
      });
  },
});

export const { addTask, deleteTask, updateTaskPriority } = todoSlice.actions;
export default todoSlice.reducer;
