import React, {useEffect, useState} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    const getIsLoggedIn = () => localStorage.getItem('IS_LOGGED_IN') === 'true';
    const sensorCategories = JSON.parse(localStorage.getItem("SensorCategories") as string);;
    console.log(sensorCategories)
    const[dropdown, setDropdown] = useState( "Temperature");
    // const[dropdown, setDropdown] = useState(sensorCategories[0] || "Temperature");


    return (
  <React.Fragment>
      { !getIsLoggedIn() &&
      (<Navbar className='p-header-area' collapseOnSelect expand="lg" bg="dark" variant="dark" style={{position:'fixed', width: '100%'}}>
              <Navbar.Brand><Link to='/' className='links'>Monitor</Link></Navbar.Brand>
              <Nav.Link><Link to='/signin' className='links'>Sign in</Link></Nav.Link>

              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          </Navbar>
      )
      }

      { getIsLoggedIn() &&
          (<Navbar className='p-header-area' collapseOnSelect expand="lg" bg="dark" variant="dark" style={{position:'fixed', width: '100%'}}>
          <Navbar.Brand><Link to='/' className='links'>Monitor</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">

                  <Nav.Link><Link to='/about' className='links'>About</Link></Nav.Link>
                  <Nav.Link><Link to='/alert-history' className='links'>Alert History</Link></Nav.Link>
                  <Nav.Link><Link to='/signin' className='links'>Sign in</Link></Nav.Link>
                  <NavDropdown title={dropdown}  id="collasible-nav-dropdown"
                               // onClick={()=>setDropdown(makeEventKey)}
                      >
                      {
                          sensorCategories.map((sensorCategory:string)=>
                              <NavDropdown.Item><Nav.Link><Link to={`/dashboard/${sensorCategory.toLowerCase()}`}>{sensorCategory}</Link></Nav.Link></NavDropdown.Item>)
                      }

                  </NavDropdown>
                  <Nav.Link><Link to='/members'className='links'>Members</Link></Nav.Link>
              </Nav>
              <Nav>
                  <Nav.Link><Link to='/settings'className='links'>Settings</Link></Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
          )
      }
  </React.Fragment>
 );}

export default Header;
