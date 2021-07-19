import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
} from "react-icons/di";
import { FaBootstrap, FaJava, FaReact, FaVuejs } from "react-icons/fa";
import {
  SiCsharp,
  SiFirebase,
  SiGraphql,
  SiJquery,
  SiMysql,
  SiSwift,
} from "react-icons/si";
import { techStack } from "../../constants/config";

const Techstack = () => {
  const components = {
    DiJavascript1,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiSass,
    FaBootstrap,
    FaJava,
    FaReact,
    FaVuejs,
    SiCsharp,
    SiFirebase,
    SiGraphql,
    SiJquery,
    SiMysql,
    SiSwift,
  };

  return (
    <Row
      className="tech-stack-wrapper"
      style={{ justifyContent: "center", paddingBottom: "50px" }}
    >
      {techStack.map((item) => {
        const TagName = components[item.COMPONENT];
        return (
          <Col xs={4} md={2} className="tech-icons" key={item.NAME}>
            <TagName />
            <div className="tile-overlay">
              <span className="hover-text">{item.NAME}</span>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Techstack;
