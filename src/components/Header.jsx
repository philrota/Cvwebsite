import React, { Component } from "react";
class Header extends Component {
  state = {};

  render() {
    return (
      <header style={{ marginLeft: 10, marginTop: 20, fontFamily: "Poppins" }}>
        <h1 style={{ color: "black" }}>Welcome!</h1>
      </header>
    );
  }
}

export default Header;
