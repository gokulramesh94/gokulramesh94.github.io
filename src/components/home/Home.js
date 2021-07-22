import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/img/landing-page-design@2x.png";
import About from "../about/About";
import Skills from "../skills/Skills";
import NavBar from "../navbar/Navbar";
import Type from "./Type";
import "./Home.scss";

function Home() {
  return (
    <section>
      <NavBar />
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Gokul</strong>
              </h1>

              <div
                style={{
                  padding: "30px 50px 0",
                  letterSpacing: 1.25,
                  textAlign: "left",
                }}
              >
                <Type />
              </div>
            </Col>

            <Col md={5}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Skills />
    </section>
  );
}

export default Home;
