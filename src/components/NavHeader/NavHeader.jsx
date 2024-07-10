import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navheader.scss";

const NavHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    const opacity = Math.min(position / 1600, 1);
    document.documentElement.style.setProperty(
      "--bg-color",
      `rgba(0, 0, 0, ${opacity})`
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="custom-header">
      <Navbar expand="lg" className="navbar fixed-top bg-light">
        <Navbar.Brand href="#">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container
        fluid
        className="header-content d-flex align-items-center w-100"
      >
        <Container fluid className="d-flex flex-lg-row flex-column">
          <div className="w-lg-75 w-100 d-flex flex-column">
            <h1 className="display-1">
              Franco <br /> Vanney
            </h1>
            <p className="position">UI Developer</p>
          </div>
          <Nav className="w-lg-25 w-100 d-flex flex-column">
            <hr />
            <Nav.Link href="#section1">Section 1</Nav.Link>
            <Nav.Link href="#section2">Section 2</Nav.Link>
            <Nav.Link href="#section3">Section 3</Nav.Link>
          </Nav>
        </Container>
      </Container>
    </header>
  );
};

export default NavHeader;
