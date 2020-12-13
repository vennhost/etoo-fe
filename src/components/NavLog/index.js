import React from 'react';
import * as Bsconnect from "react-icons/bs";
import * as Fapower from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
/**
* @author
* @function navLog
**/

const navLog = (props) => {
  return(
    <div >
    <Nav  defaultActiveKey="/Dashbord" className="justify-content-end" >
        <Nav.Item >
            <Nav.Link href="/Dashboard" ><Bsconnect.BsGearWideConnected/> Dashboard</Nav.Link>
        </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/Login"> <Fapower.FaPowerOff/> 
        LogIn
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/Signup"> <Fapower.FaPowerOff/> 
        LogOut
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Welcome!
      </Nav.Link>
    </Nav.Item>
    </Nav>
    </div>
   )

 }

export default navLog