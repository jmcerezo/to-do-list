import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AddTask from "../component/AddTask";
import ActiveTasks from "../component/ActiveTasks";
import CompletedTasks from "../component/CompletedTasks";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const ToDoList = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AddTask />
      <Box sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="categories"
        >
          <Tab label="Active" {...a11yProps(0)} />
          <Tab label="Completed" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ActiveTasks />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CompletedTasks />
        </TabPanel>
      </Box>
    </>
  );
};

export default ToDoList;
