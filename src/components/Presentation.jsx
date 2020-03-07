import React, { Component } from "react";

import propic from "../images/propic.jpg";

class Presentation extends Component {
  state = {};
  render() {
    return (
      <div id="presentation" className="container-fluid">
        <div id="background" className="container-fluid">
          <img
            id="propic"
            width="152"
            height="152"
            src={propic}
            alt="portrait"
          ></img>
          <div id="resume" className="container-fluid">
            <h3>
              <b>Hey! my name is Philippe</b>
            </h3>
            <h5>
              I'm a young enthusiast of web and softwares developing,
              <br />
              actually i'm into a deep learning of the various technologies
              related. <br />
              I am interested in new projects or hiring opportunities for new
              ones,
              <br />
              my motivation and dedication leads my way through each project i
              start developing,
              <br />
              so i consider myself a dinamic,motivated and a focused person who
              is in constantly research of realizing his goals.
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Presentation;
