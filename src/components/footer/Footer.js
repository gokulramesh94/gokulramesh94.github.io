import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaCodepen, FaLinkedinIn } from "react-icons/fa";
import { footer } from "../../constants/config";
import "./Footer.scss";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  const components = {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    FaCodepen,
    FaLinkedinIn,
  };
  return (
    <Container fluid className="footer">
      <Row className="footer-row">
        <Col md="4" className="footer-copywright">
          <div>Developed by Gokul</div>
        </Col>
        <Col md="4" className="footer-copywright">
          <div>Copyright © {year}</div>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {footer.QUICK_LINKS.length
              ? footer.QUICK_LINKS.map(({ NAME, LINK, COMPONENT }) => {
                  let TagName = components[COMPONENT];
                  return (
                    <li className="social-icons" key={NAME}>
                      <a
                        href={LINK}
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TagName />
                      </a>
                    </li>
                  );
                })
              : null}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
