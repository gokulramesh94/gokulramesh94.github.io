import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Burger from "./Burger";
import "./Navbar.scss";

const Navbar = () => {
  const [navColour, updateNavbar] = useState(false);
  const [activeTab, setActiveTab] = useState("");

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
    <div className={`nav-wrapper navbar ${navColour ? "sticky" : ""}`}>
      <Burger activeTab={activeTab} />
    </div>
  );
};

export default Navbar;
