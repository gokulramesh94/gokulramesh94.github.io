import React from "react";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import "./Skills.scss";

const Skills = () => {
  return (
    <div>
      <div>
        <div className="tech-stack-title">Tech Stack</div>
        <Techstack />
      </div>
      <div>
        <div className="tool-stack-title">Tool Stack</div>
        <Toolstack />
      </div>
    </div>
  );
};

export default Skills;
