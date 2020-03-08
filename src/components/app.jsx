import React, { Component } from "react";
import Menu from "./Menu";
import Presentation from "./Presentation";
import Content from "./Content";
import Footer from "./Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <div id="body">
        <Menu />
        <Presentation />
        
        <Footer />
      </div>
    );
  }
}

export default App;
