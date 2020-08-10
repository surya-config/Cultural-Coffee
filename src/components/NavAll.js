import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/NavTop.css";

function NavAll() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <Link className="menuitem" to="/">
                Home
              </Link>
              <Link className="menuitem" to="/about">
                About
              </Link>
              <Link className="menuitem" to="/corporate">
                Corporate
              </Link>
            </div>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavAll;
