import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "../css/NavTop.css";

function NavTop() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", NavTop);
    };
  }, []);

  return (
    <div>
      <Navbar className={`navbar  ${show && "nav-show"} `} fixed="top">
        <Navbar.Brand className="brand" href="/">
          <h1 style={{ fontSize: "38px", color: "#A5700C" }}>
            Cultural Coffee<sup>®</sup>
          </h1>
        </Navbar.Brand>
        <Nav className="mr-auto menu">
          <div class="dropdown">
            <button class="dropbtn">Menu</button>
            <div class="dropdown-content">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/corporate">Corporate</Link>
            </div>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavTop;
