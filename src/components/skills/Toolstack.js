import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgTrello } from "react-icons/cg";
import { DiBitbucket, DiGit } from "react-icons/di";
import { FaJira } from "react-icons/fa";
import {
  SiEclipseide,
  SiLinux,
  SiVisualstudio,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiAdobexd,
  SiXcode,
  SiAndroidstudio,
  SiAzuredevops,
  SiNetlify,
} from "react-icons/si";
import { toolStack } from "../../constants/config";

const Toolstack = () => {
  const components = {
    CgTrello,
    DiBitbucket,
    DiGit,
    FaJira,
    SiEclipseide,
    SiLinux,
    SiVisualstudio,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiAdobexd,
    SiXcode,
    SiAndroidstudio,
    SiAzuredevops,
    SiNetlify,
  };

  return (
    <Row
      className="tool-stack-wrapper"
      style={{ justifyContent: "center", paddingBottom: "50px" }}
    >
      {toolStack.map((item) => {
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

export default Toolstack;
