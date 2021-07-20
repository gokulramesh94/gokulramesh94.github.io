import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "../Image/Image";
import Skeleton from "react-loading-skeleton";

const ProjectCard = ({ project }) => {
  const { TITLE, DESCRIPTION, SITE_URL, REPO_URL, IMAGE, TECH_STACK } = project;
  return (
    <Col md={4}>
      <Card className="card mb-5 bg-white rounded">
        <Image source={IMAGE} altText={TITLE} />
        <Card.Body>
          <div>
            <Card.Title as="h5">{TITLE || <Skeleton />} </Card.Title>
            <Card.Text>
              {!DESCRIPTION ? "" : DESCRIPTION || <Skeleton count={3} />}{" "}
            </Card.Text>
          </div>
          <div className="card-footer-section">
            <div>
              {SITE_URL ? (
                <a
                  href={SITE_URL}
                  className="btn btn-outline-secondary mr-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github" /> LIVE
                </a>
              ) : null}
              {REPO_URL ? (
                <a
                  href={REPO_URL}
                  className="btn btn-outline-secondary mr-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github" /> REPO
                </a>
              ) : null}
              {TECH_STACK.length ? (
                <div className="techstack-wrapper">
                  <span className="techstack-title">Tech Stack : </span>
                  {TECH_STACK.map((item, index) => {
                    return (
                      <span key={item}>
                        {item}
                        {index !== TECH_STACK.length - 1 ? ", " : null}
                      </span>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
