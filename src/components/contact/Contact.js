import React from "react";
import NavBar from "../navbar/Navbar";
import {
  FaCodepen,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact">
      <NavBar />
      <div className="top-bar">
        <div className="heading">Let's start a conversation!</div>
      </div>
      <div className="container connect-container clearfix">
        <div className="connect-section">
          <div className="connect-label">
            For work inquiries, please drop a message here,
          </div>
          <div className="connect-links">
            <div className="connect-social">
              <a href="mailto:gokulr.191194@gmail.com">
                <FaEnvelope />
              </a>
            </div>
            <div className="connect-social">
              <a
                href="https://www.linkedin.com/in/gokulramesh94/"
                target="blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="connect-section">
          <div className="connect-label">
            For social activities, connect here,
          </div>
          <div className="connect-links">
            <div className="connect-social">
              <a href="https://twitter.com/gokulramesh94" target="blank">
                <FaTwitter />
              </a>
            </div>
            <div className="connect-social">
              <a
                href="https://www.instagram.com/the__high__tide/"
                target="blank"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="connect-social">
              <a
                href="https://www.facebook.com/gokul.ramesh.73/"
                target="blank"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
        <div className="connect-section">
          <div className="connect-label">Check out my work here,</div>
          <div className="connect-links">
            <div className="connect-social">
              <a href="https://github.com/gokulramesh94" target="blank">
                <FaGithub />
              </a>
            </div>
            <div className="connect-social">
              <a href="https://codepen.io/gokulramesh94" target="blank">
                <FaCodepen />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
