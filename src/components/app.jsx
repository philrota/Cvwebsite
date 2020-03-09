import React, { Component } from "react";
import Menu from "./Menu";
import Presentation from "./Presentation";
import Content from "./Content";
import Footer from "./Footer";
import Coll from "./Coll";
import CollAbout from "./CollAbout"
import Skills from "./Skills"

class App extends Component {
  state = {};
  render() {
    return (
      <div id="body">
        <Menu />
        <Presentation />
        <CollAbout  />
        <Coll />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
