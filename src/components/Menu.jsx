import React, { Component } from 'react';
import Header from "./Header";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav"

class Menu extends Component {
    state = {  }
    render() { 
        return (  
<Navbar collapseOnSelect id="navbar" expand="lg" variant="light">
  <Header />
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  href="#Home" className="disabled">Home</Nav.Link>
      <Nav.Link  href="#features">Projects</Nav.Link>
      <Nav.Link  href="#pricing">About me</Nav.Link>
      <Nav.Link  href="#contacts">Contacts</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        );
    }
}
 
export default Menu;