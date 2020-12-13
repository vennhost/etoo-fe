import React from 'react';
import {Navbar, Nav,NavDropdown, NavLink, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/icons/logo.png'
import './style.css'
/**
* @author
* @function Navbar
**/

const styles = {
  nava: {
    backgroundColor: '#4c5fad',
    width:'100%',
    font: 'bold 2em sans-serif',
    fontSize:'20px',
    
  },
  drop: {
    backgroundColor: 'white',
    color:'#4c5fab',
    border: '1px solid',
    borderRadius: 10,
  }
};

const Bar = (props) => {
  return(
    
      <Navbar bg="light" expand="lg" className="navbar sticky-top navbar-light bg-light" >
          
          
           <div className="container-fluid" > 
           <Navbar.Brand href="/" style={{width:"40px"}} >
             <div >
                <img src={logo} style={{width:"50px"}}/>
              </div></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="basic-navbar-nav" style={styles.nava}>
              
              <Nav className="mr-auto" style={{width:"100%"}}>
                <Nav.Link href="/" className="text-white">Home</Nav.Link>
                <Nav.Link href="/ContactUs" className="text-white">Contact Us</Nav.Link>
                <Nav.Link href="AboutUs" className="text-white">About Us</Nav.Link>
                <NavDropdown title="Services" id="collasible-nav-dropdown"style={styles.drop} >
                  <NavDropdown.Item href="/Data">Data</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Airtime">Airtime</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/TvSub">TvSub</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Branding">Branding</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            
                
                <Nav className=".justify-content-end" style={{width:"30%"}}>
                  <Nav.Link href="/Login" className="text-white">Login</Nav.Link>
                  <Nav.Link href="/SignUp" className="text-white">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </div>
         
      </Navbar>
    
        
    
   );

  };
export default Bar;