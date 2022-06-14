import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/LOGO.svg";
import "./Navigation.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navigation = () => {
  return (
    // <Navbar bg="" expand="lg">
    //   <Container>
    //     <Navbar.Brand as={Link} to="/" className="d-md-none">
    //       <img className="logo" src={logo} alt="logo" />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link as={Link} to="/" className="nav-link">
    //           Home
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/" className="nav-link">
    //           About
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/" className="nav-link">
    //           Skill
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/" className="nav-link">
    //           Experience
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/" className="nav-link">
    //           Project
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/" className="nav-link">
    //           Contact
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //     <Navbar.Brand as={Link} to="/" className="d-none d-md-block">
    //       <img className="logo" src={logo} alt="logo" />
    //     </Navbar.Brand>
    //   </Container>
    // </Navbar>
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} bg="" expand={expand} className="mb-3">
          <Container fluid className="d-flex align-items-center">
            <Navbar.Brand as={Link} to="/" className="d-md-none">
              <img className="logo" src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" className="nav-link">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/" className="nav-link">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/" className="nav-link">
                    Skill
                  </Nav.Link>
                  <Nav.Link as={Link} to="/" className="nav-link">
                    Experience
                  </Nav.Link>
                  <Nav.Link as={Link} to="/" className="nav-link">
                    Project
                  </Nav.Link>
                  <Nav.Link as={Link} to="/" className="nav-link">
                    Contact
                  </Nav.Link>
                </Nav>
                <Navbar.Brand as={Link} to="/" className="d-none d-md-block">
                  <img className="logo" src={logo} alt="logo" />
                </Navbar.Brand>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navigation;
