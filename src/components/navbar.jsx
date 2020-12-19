import React from 'react'
import {Nav,Navbar, NavDropdown} from 'react-bootstrap'
import GuideDialog from './guide'
import {AmplifySignOut} from "@aws-amplify/ui-react";
import JSignOut from '../resources/JSignOut';


function NavigationBar() {

  
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">1:5 Connections</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link ><GuideDialog/></Nav.Link>
        <AmplifySignOut/>
            
        </Nav>
      </Navbar>
    );
}
export default NavigationBar;