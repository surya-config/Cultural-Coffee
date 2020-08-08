import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/NavTop.css";

function NavAll() {
  return (
    <div>
      <Navbar className="nav-all" fixed="top">
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

export default NavAll;
