import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import { repos } from "../../constants/config";
import NavBar from "../navbar/Navbar";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";

const Project = () => {
  //const heading = repos.heading;
  const username = repos.gitHubUsername;
  const length = repos.reposLength;
  const specfic = repos.specificRepos;

  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const organisationAPI = `https://api.github.com/users/${username}/orgs`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];

      //Fetching specific repo from organisation
      const organisationResponse = await axios.get(organisationAPI);
      organisationResponse.data.forEach(async (organisation) => {
        const repos = await axios.get(organisation.repos_url);
        repos.data.forEach((repo) => {
          repoList.push(repo);
        });
      });

      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, organisationAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <NavBar />
      <Container className="projects-wrapper">
        {/* <h2 className="display-4 pb-5 text-center">{heading}</h2> */}
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
