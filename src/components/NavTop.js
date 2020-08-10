import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

import "../css/NavTop.css";

function NavTop() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <Container>
      <Row>
        <Col>
          <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            className={`navbar  ${show && "nav-show"} `}
            fixed="top"
          >
            <Navbar.Brand className="brand" href="/">
              <h1
                style={{
                  letterSpacing: "5px",
                  fontSize: "40px",
                  color: "#A5700C",
                  fontFamily: "'courgette',Playfair Display",
                }}
              >
                Cultural Coffee<sup>®</sup>
              </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto menu">
                <Link className="menuitem" to="/">
                  Home
                </Link>
                <Link className="menuitem" to="/about">
                  About
                </Link>
                <Link className="menuitem" to="/corporate">
                  Corporate
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default NavTop;
