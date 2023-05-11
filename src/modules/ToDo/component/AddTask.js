import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, openSnackbar } from "../../../slices/todoSlice";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SnackbarAlert from "./SnackbarAlert";

const AddTask = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (value.trim().length === 0) {
      dispatch(
        openSnackbar({
          open: true,
          severity: "error",
          message: "Enter a task before adding!",
        })
      );

      setValue("");

      return;
    }

    dispatch(addTask(value));

    dispatch(
      openSnackbar({
        open: true,
        severity: "success",
        message: "Task added!",
      })
    );

    setValue("");
  };

  return (
    <>
      <SnackbarAlert />
      <div style={{ margin: "25px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <TextField
                label="What needs to be done?"
                variant="outlined"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                onClick={onSubmit}
                sx={{ height: "100%", width: "100%" }}
              >
                <AddBoxIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default AddTask;
