import React, { Component } from 'react';
import image from "../images/Urban.jpg"
import propic from "../images/propic.jpg"

class Presentation extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='presentation'>
                <div id="container">
                <img id="pres-img" src={image} alt="urban skyscrapers"></img>
                <div id="propic">
                    <img id="portrait" width="140" height="150" src={propic} alt="profile pic"></img>
                </div>
                <div id="resume"><h3><b>Hello i'm Philippe!</b></h3><br />
                <h5>I'm a young enthusiast of web and softwares developing,<br />
                    actually i'm into a deep learning of the various technologies related. <br />
               I am interested in new projects or hiring opportunities for new ones,<br />
               my motivation and dedication leads my way through each project i start developing,<br />
               so i consider myself a dinamic,motivated and a focused person who is in constantly research of realizing his goals.</h5>
               </div>
                </div>
                



            </div>
         );
    }
}
 
export default Presentation;