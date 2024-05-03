import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";

const logo = require("../assets/images/bcg.jpg");
const facebook = require("../assets/images/facebook.gif");

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const OnScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", OnScroll);

    return () => window.removeEventListener("scroll", OnScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img alt="Logo" src={logo} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              onClick={() => onUpdateActiveLink("home")}
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#services"
              onClick={() => onUpdateActiveLink("services")}
              className={
                activeLink === "services" ? "active navbar-link" : "navbar-link"
              }
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={() => onUpdateActiveLink("projects")}
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.facebook.com/profile.php?id=100077754870518">
                <img alt="facebook" src={facebook} />
              </a>
            </div>
            <Dropdown>
              <Dropdown.Toggle
                className="hire-button"
                variant="success"
                id="dropdown-basic"
              >
                Hire Us
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="tel:+12299771509">Call Us</Dropdown.Item>
                <Dropdown.Item
                  href="mailto:
daviswalker66@gmail.com"
                >
                  Send Email
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
