import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import Strings from "../../constants/Strings";
import "./Navbar.scss";

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const ROUTES = Strings.ROUTES;
  const { HOME, PROJECTS, RESUME, CONTACT } = ROUTES;

  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return function cleanup() {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to={HOME}
                onClick={() => updateExpanded(false)}
                className={activeTab === HOME ? "active" : ""}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={PROJECTS}
                onClick={() => updateExpanded(false)}
                className={activeTab === PROJECTS ? "active" : ""}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={RESUME}
                onClick={() => updateExpanded(false)}
                className={activeTab === RESUME ? "active" : ""}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to={CONTACT}
                onClick={() => updateExpanded(false)}
                className={activeTab === CONTACT ? "active" : ""}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Connect
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
