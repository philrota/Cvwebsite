import React, { Component } from 'react';
class navbar extends Component {
   
    state = {  }
    render() { 
        let date = new Date();
        let days = ["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];
        return ( 
            <nav className="bg-primary">
                Today is {days[date.getDay()]} the {date.getDate()}th !
            </nav>
         );
    }
}
 
export default navbar;