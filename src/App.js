import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import ToDoList from "./modules/ToDo/container/ToDoList";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>To-Do List</h1>
          <ToDoList />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
