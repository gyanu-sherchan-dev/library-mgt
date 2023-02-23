import { useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  const getFromSessionStorage = () => {
    return JSON.parse(sessionStorage.getItem("user"));
  };
  const sesssionData = getFromSessionStorage();
  console.log(sesssionData);

  useEffect(() => {
    getFromSessionStorage();
  }, [sesssionData]);

  const handleOnLogout = () => {
    sessionStorage.removeItem("user");
    getFromSessionStorage();
  };
  return (
    <Navbar bg="success" expand="lg" className="header">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {sesssionData ? (
              <>
                <Link to="/" className="nav-link">
                  Dashboard
                </Link>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={() => handleOnLogout}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
                <Link to="/" className="nav-link">
                  Login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
