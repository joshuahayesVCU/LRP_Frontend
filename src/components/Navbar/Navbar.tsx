import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Navbar.css'

import LRPLogo from '../../assets/ram-pantry.png'

function NavbarScroll() {
  return (
    <Navbar sticky="top" expand="lg" >
      <Container>
        <Navbar.Brand href="#home" >
              <img
              alt="LRP logo"
              src={LRPLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> Little Ram Pantries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://news.vcu.edu/article/2021/10/little-ram-pantries-will-provide-emergency-food-assistance-to-vcu-students">Learn More</Nav.Link>
            <NavDropdown title="Filter" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Monroe Park Campus</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Medical College Campus</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Favorites</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               Clear Filters 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
 }

export default NavbarScroll;
