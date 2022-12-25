import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="fw-bold fs-3">The Blog App</Navbar.Brand>
          <Nav className="">
            <div className="d-flex justify-content-end">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/create" className="nav-link">
                Create
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
