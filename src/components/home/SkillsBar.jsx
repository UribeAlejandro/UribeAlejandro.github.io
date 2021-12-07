import React from "react";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2" align="center">{skill}</p>
      <center>  <b> <i className="lead mb-1 mt-2">{value}</i></b> </center>
    </div>
  );
}

export default SkillsBar;
