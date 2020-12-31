import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header: React.FC = () => {

    return (
  <React.Fragment>
      <Navbar className='p-header-area' collapseOnSelect expand="lg" bg="dark" variant="dark" style={{position:'fixed', width: '100%'}}>
          <Navbar.Brand><Link to='/' className='links'>Monitor</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">

                  <Nav.Link><Link to='/about' className='links'>About</Link></Nav.Link>
                  <Nav.Link><Link to='/alertHistory' className='links'>Alert History</Link></Nav.Link>
                  <Nav.Link><Link to='/alertSubscribers' className='links'>Alert Subscribers</Link></Nav.Link>
                  <Nav.Link><Link to='/dashboard' className='links'>Dashboard</Link></Nav.Link>
                  <Nav.Link><Link to='/members'className='links'>Members</Link></Nav.Link>
              </Nav>
              <Nav>
                  <Nav.Link><Link to='/settings'className='links'>Settings</Link></Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  </React.Fragment>
 );}

export default Header;
