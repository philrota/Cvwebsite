import React, { Component } from "react";
import Header from "./Header";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Menu extends Component {
  state = {};
  render() {
    return (
      <Navbar collapseOnSelect id="navbar" expand="lg" variant="light">
        <Header />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menu;
