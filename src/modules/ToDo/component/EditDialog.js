import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { editTask, openEditDialog } from "../../../slices/todoSlice";

const EditDialog = () => {
  const { open, task } = useSelector((state) => state.todo.edit);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(openEditDialog({ open: false, task }));
    setValue("");
  };

  const handleSave = () => {
    dispatch(editTask({ id: task.id, name: value.length ? value : task.name }));
    handleClose();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit task</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={task.name}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditDialog;
