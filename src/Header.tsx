import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
 return (
  <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Weather App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link><Link to='/members'>Members</Link></Nav.Link>
                  <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                  <Nav.Link><Link to='/alert-history'>Alert History</Link></Nav.Link>
                  <NavDropdown title="Sensors" id="collasible-nav-dropdown">
                      <NavDropdown.Item><Nav.Link><Link to='/temperature'>Temperature</Link></Nav.Link></NavDropdown.Item>
                      <NavDropdown.Item><Nav.Link><Link to='/rain'>Rain</Link></Nav.Link></NavDropdown.Item>
                      <NavDropdown.Item><Nav.Link><Link to='/wind'>Wind</Link></Nav.Link></NavDropdown.Item>
                      <NavDropdown.Item><Nav.Link><Link to='/humidity'>Humidity</Link></Nav.Link></NavDropdown.Item>

                  </NavDropdown>
              </Nav>
              <Nav>
                  <Nav.Link><Link to='/settings'>Settings</Link></Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  </React.Fragment>
 );}

export default Header;
