import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import NavBar from '../../components/navbar/Navbar';
import ProjectCard from './ProjectCard';
import Filter from './Filter';
import { work } from '../../constants/config';
import './Projects.scss';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('show-all');

  const { CODEPEN, PROJECTS, FILTERS } = work;

  useEffect(() => {
    var data = [];
    data = [...PROJECTS];
    data = [...data, ...CODEPEN];
    setProjects(data);
  }, [PROJECTS, CODEPEN]);

  const applyFilter = (filter) => {
    var data = [];
    if (filter === FILTERS.CODEPEN.FILTER) {
      data = [...CODEPEN];
    } else if (filter === FILTERS.PROJECTS.FILTER) {
      data = [...PROJECTS];
    } else {
      data = [...PROJECTS];
      data = [...data, ...CODEPEN];
    }
    setProjects(data);
    setActiveFilter(filter);
  };
  return (
    <div>
      <Jumbotron fluid id="projects" className="m-0">
        <NavBar />
        <Container className="projects-wrapper">
          <div className="heading">My Work</div>
          <Filter
            data={Object.values(FILTERS)}
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
