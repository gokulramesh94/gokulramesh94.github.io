import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import Filter from "./Filter";
import NavBar from "../navbar/Navbar";
import { work } from "../../constants/config";
import "./Projects.scss";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("show-all");

  useEffect(() => {
    var data = [];
    data = [...work.PROJECTS];
    data = [...data, ...work.CODEPEN];
    setProjects(data);
  }, []);

  const applyFilter = (filter) => {
    var data = [];
    if (filter === work.FILTERS.CODEPEN.FILTER) {
      data = [...work.CODEPEN];
    } else if (filter === work.FILTERS.PROJECTS.FILTER) {
      data = [...work.PROJECTS];
    } else {
      data = [...work.PROJECTS];
      data = [...data, ...work.CODEPEN];
    }
    setProjects(data);
    setActiveFilter(filter);
  };
  return (
    <div>
      <Jumbotron fluid id="projects" className="bg-light m-0">
        <NavBar />
        <Container className="projects-wrapper">
          <div className="heading">My Work</div>
          <Filter
            data={Object.values(work.FILTERS)}
            activeFilter={activeFilter}
            onClick={(filter) => applyFilter(filter)}
          />
          <Row>
            {projects.length ? (
              projects.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  project={project}
                />
              ))
            ) : (
              <div>No Projects to display!</div>
            )}
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Project;
