import React, { useEffect } from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/NavTop.css";

function NavAll() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar className="nav-all" variant="dark" expand="lg" fixed="top">
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
              <Nav className="mr-auto md-auto menu">
                <div class="dropdown">
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
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default NavAll;
