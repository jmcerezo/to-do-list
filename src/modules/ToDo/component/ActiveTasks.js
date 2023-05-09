import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTask, deleteTask } from "../../../slices/taskSlice";
import { openSnackbar } from "../../../slices/alertSlice";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SnackbarAlert from "./SnackbarAlert";

const ActiveTasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const activeTasks = tasks.filter((t) => !t.completed);
  const dispatch = useDispatch();

  const onToggle = (id) => {
    dispatch(toggleTask(id));
    dispatch(
      openSnackbar({
        open: true,
        severity: "success",
        message: "Task marked as completed!",
      })
    );
  };

  const onDelete = (id) => {
    dispatch(deleteTask(id));
    dispatch(
      openSnackbar({
        open: true,
        severity: "info",
        message: "Task deleted!",
      })
    );
  };

  return (
    <>
      <SnackbarAlert />
      {activeTasks.length ? (
        <List
          sx={{
            width: "100%",
            maxWidth: 600,
            height: "calc(100vh - 20rem)",
            overflow: "auto",
            bgcolor: "background.paper",
          }}
        >
          {activeTasks.map((task) => {
            const labelId = `checkbox-list-label-${task.id}`;

            return (
              <ListItem
                key={task.id}
                disablePadding
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      onDelete(task.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                      onClick={() => {
                        onToggle(task.id);
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={task.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p style={{ textAlign: "center" }}>Add a new task.</p>
      )}
    </>
  );
};

export default ActiveTasks;
