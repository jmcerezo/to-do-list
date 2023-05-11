import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
    alert: { open: false, severity: "", message: "" },
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date(),
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
  },
});

export const { addTask, toggleTask, deleteTask, openSnackbar } =
  todoSlice.actions;

export default todoSlice.reducer;
