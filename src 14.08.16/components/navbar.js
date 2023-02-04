import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

class NavbarComponent extends React.Component {
    logout() {
      localStorage.removeItem("token");
      window.location.replace('/login');
    }

    render () {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand href="/" className="text-bold">DoraStore</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/">Resep</Nav.Link>
                      <Nav.Link href="/bahan">Bahan</Nav.Link>
                      <Nav.Link href="/request">Request</Nav.Link>
                    </Nav>
                    <Button variant="danger" className="logout-button" onClick={() => this.logout()}>
                      Logout
                    </Button>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavbarComponent