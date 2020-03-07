import React, { Component } from "react";
class Header extends Component {
  state = {};

  render() {
    return (
      <header style={{ marginLeft: 40, marginTop: 20, fontFamily: "Nunito" }}>
        <h1 style={{ color: "black" }}>Welcome!</h1>
      </header>
    );
  }
}

export default Header;
