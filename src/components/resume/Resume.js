import React from "react";
import CustomResume from "../../assets/pdf/Gokul-Resume.pdf";
import NavBar from "../navbar/Navbar";
import "./Resume.scss";

const Resume = () => {
  return (
    <div id="resume">
      <NavBar />
      <div className="resume-wrapper">
        <object
          data={CustomResume}
          type="application/pdf"
          width="100%"
          height="1024px"
        >
          <div>
            Oops! Looks like your browser does not have a PDF plugin to view the
            resume. Instead, You can{" "}
          </div>
          <div className="button">
            <a href={CustomResume}>Download Resume</a>
          </div>
        </object>
      </div>
    </div>
  );
};

export default Resume;
