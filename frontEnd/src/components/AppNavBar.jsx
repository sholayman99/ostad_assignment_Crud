import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const AppNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm ">
      <Container>
        <Navbar.Brand className="fw-bold">MERN APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={"/"} className={"nav-link fw-semibold"} >Students</NavLink>
            <NavLink to={"/register"} className={"nav-link fw-semibold"} >Registration</NavLink>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;
