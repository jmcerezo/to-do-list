import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
    alert: { open: false, severity: "", message: "" },
    edit: { open: false, task: {} },
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        name: action.payload,
        completed: false,
      };

      return { ...state, tasks: [...state.tasks, newTask] };
    },
    toggleTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              completed: !task.completed,
            };
          }
          return task;
        }),
      };
    },
    editTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              name: action.payload.name,
            };
          }
          return task;
        }),
      };
    },
    deleteTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    },
    openSnackbar: (state, action) => {
      const { open, severity, message } = action.payload;
      return { ...state, alert: { open, severity, message } };
    },
    openEditDialog: (state, action) => {
      const { open, task } = action.payload;
      return { ...state, edit: { open, task } };
    },
  },
});

export const {
  addTask,
  toggleTask,
  editTask,
  deleteTask,
  openEditDialog,
  openSnackbar,
} = todoSlice.actions;

export default todoSlice.reducer;
