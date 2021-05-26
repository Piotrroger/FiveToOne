import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import GuideDialog from './guide'
import {AmplifySignOut} from "@aws-amplify/ui-react";
import LockSharpIcon from '@material-ui/icons/LockSharp';
import IconButton from '@material-ui/core/IconButton';

function NavigationBar() {

  
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">1:5 Connections</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link ><GuideDialog/></Nav.Link>
        <IconButton>
          <LockSharpIcon color="action" style ={{fontSize: 30}, {color: "#e0e0e0"}} onClick={AmplifySignOut}></LockSharpIcon>   
        </IconButton>
        </Nav>
      </Navbar>
    );
}
export default NavigationBar;