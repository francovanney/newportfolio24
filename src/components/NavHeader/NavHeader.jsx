import React, { useState, useEffect } from "react";
import { Nav, Container } from "react-bootstrap";
import "./navheader.scss";
import { Separator } from "../ui/separator";

const NavHeader = () => {
  const [opacity, setOpacity] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const maxScroll = window.innerHeight * 0.85; // Ajusta este valor según necesites
    const newOpacity = Math.min(position / maxScroll, 1);
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="custom-header">
      <Container
        fluid
        className="header-content d-flex align-items-center w-100"
      >
        <Container fluid className="d-flex flex-lg-row flex-column">
          <div className="w-lg-75 w-100 d-flex flex-column">
            <h1 className="display-1">
              Franco <br /> Vanney
            </h1>
            <p className="position">
              FE/<span className="ui-word">UI</span> Developer
            </p>
          </div>
          <Nav className="w-lg-25 w-100 d-flex flex-column">
            <Separator />
            <Nav.Link href="#section-1">Section 1</Nav.Link>
            <Separator />
            <Nav.Link href="#section2">Section 2</Nav.Link>
            <Separator />
            <Nav.Link href="#section3">Section 3</Nav.Link>
          </Nav>
        </Container>
      </Container>
    </header>
  );
};

export default NavHeader;
