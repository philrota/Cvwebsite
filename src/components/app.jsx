import React, { Component } from 'react';
import Menu from "./Menu"
import Presentation from "./Presentation"
import Content from "./Content"


class App extends Component {
    state = {  }
    render() { 
        return ( 
           <div id="body">
             <Menu />
             <Presentation />
             <Content />
               


           </div>
         );
    }
}
 
export default App;


