import Container from "react-bootstrap/Container";
import { Nav, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export const Header = ({ currentUser }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
    sessionStorage.removeItem("user");
  };

  return (
    <Navbar bg="info" expand="md">
      <Container>
        <Navbar.Brand href="#home">Library Mgmt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {currentUser?._id ? (
              <div className="d-flex align-items-center gap-2">
                Hi {currentUser.fName}
                <Button onClick={() => handleLogOut()}>Logout</Button>
              </div>
            ) : (
              <>
                <Nav.Link href="/">
                  Login <i className="fa-solid fa-user"></i>
                </Nav.Link>
                <Nav.Link href="/register">
                  Sign Up <i className="fa-solid fa-pen-to-square"></i>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
