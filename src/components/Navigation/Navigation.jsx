import { Container, Nav, Navbar } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import logo from "../../images/LOGO.svg";
import "./Navigation.css";

const Navigation = ({ transparent }) => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg={transparent === true ? "transparent" : "white"}
          expand={expand}
          className="mb-3 p-0 nav-bar"
        >
          <Container className="d-flex align-items-center">
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
                <Nav className="me-auto align-items-center">
                  <Nav.Link
                    as={Link}
                    to="/"
                    className={
                      transparent === true ? "nav-link" : "nav-link-dark"
                    }
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/about"
                    className={
                      transparent === true ? "nav-link" : "nav-link-dark"
                    }
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/"
                    className={
                      transparent === true ? "nav-link" : "nav-link-dark"
                    }
                  >
                    Skill
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/"
                    className={
                      transparent === true ? "nav-link" : "nav-link-dark"
                    }
                  >
                    Experience
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/"
                    className={
                      transparent === true ? "nav-link" : "nav-link-dark"
                    }
                  >
                    Project
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/"
                    className={
                      transparent === true ? "nav-link" : "nav-link-dark"
                    }
                  >
                    Contact
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/article"
                    className={
                      transparent === true ? "nav-link" : "nav-link-dark"
                    }
                  >
                    Article
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
