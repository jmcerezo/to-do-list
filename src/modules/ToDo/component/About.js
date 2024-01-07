import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <p>To-Do List React App</p>
      <p>made by JM Cerezo</p>
      <a
        href="https://github.com/jmcerezo/to-do-list"
        target="_blank"
        style={{
          textDecoration: "none",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          width: "8rem",
          height: "2rem",
          margin: "auto",
        }}
      >
        <GitHubIcon />
        <p>Source Code</p>
      </a>
    </div>
  );
};

export default About;
