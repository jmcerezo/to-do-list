import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSnackbar } from "../../../slices/todoSlice";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarAlert = () => {
  const open = useSelector((state) => state.todo.alert.open);
  const severity = useSelector((state) => state.todo.alert.severity);
  const message = useSelector((state) => state.todo.alert.message);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(openSnackbar({ open: false, severity, message }));
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
