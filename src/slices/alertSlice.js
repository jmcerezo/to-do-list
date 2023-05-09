import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    open: false,
    severity: "",
    message: "",
  },
  reducers: {
    openSnackbar: (state, action) => {
      const { open, severity, message } = action.payload;
      return { ...state, open, severity, message };
    },
  },
});

export const { openSnackbar } = alertSlice.actions;

export default alertSlice.reducer;
