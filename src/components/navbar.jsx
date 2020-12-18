import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import GuideDialog from './guide'

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">1:5 Connections</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link ><GuideDialog/></Nav.Link>
            <Nav.Link>USER</Nav.Link>
            <Nav.Link>LOGO</Nav.Link>
        </Nav>
      </Navbar>
    );
}
export default NavigationBar;