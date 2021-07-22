import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import Strings from "../../constants/Strings";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding-left: 0;
  a {
    color: #fff;
    padding: 1rem 1.5rem;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #fff;
    }
  }
`;

const RightNav = ({ open, activeTab }) => {
  const ROUTES = Strings.ROUTES;
  const { HOME, PROJECTS, RESUME, CONTACT } = ROUTES;

  const handleClick = () => {};

  return (
    <Ul open={open}>
      <Link
        to={HOME}
        className={activeTab === HOME ? "active" : ""}
        onClick={handleClick}
      >
        <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
      </Link>
      <Link
        to={PROJECTS}
        className={activeTab === PROJECTS ? "active" : ""}
        onClick={handleClick}
      >
        <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
        Projects
      </Link>
      <Link
        to={RESUME}
        className={activeTab === RESUME ? "active" : ""}
        onClick={handleClick}
      >
        <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
      </Link>
      <Link
        to={CONTACT}
        className={activeTab === CONTACT ? "active" : ""}
        onClick={handleClick}
      >
        <BiMessageDetail style={{ marginBottom: "2px" }} /> Connect
      </Link>
    </Ul>
  );
};

export default RightNav;
