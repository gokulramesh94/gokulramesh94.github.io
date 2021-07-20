import React from "react";
import { about } from "../../constants/config";

const About = () => {
  //const heading = about.heading;
  const message = about.message;
  const link = about.imageLink;
  const imgSize = about.imageSize;

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-3 d-none d-lg-block align-self-center">
            <img
              className="profilepicture border rounded-circle"
              src={link}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
          </div>

          <div className={`col-lg-9`}>
            {/* <h2 className="display-4 mb-5 text-center">{heading}</h2> */}
            <p className="lead about-message">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
