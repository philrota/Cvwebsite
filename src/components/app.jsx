import React, { Component } from 'react';
import Menu from "./Menu"
import Presentation from "./Presentation"


class App extends Component {
    state = {  }
    render() { 
        return ( 
           <div id="body">
             <Menu />
             <Presentation />
               


           </div>
         );
    }
}
 
export default App;


