
import React, { Component } from 'react';
import prodotti from "./prodotti"

class Product extends Component {
    state = {  }
    render() { 
    
      const prdcMap = prodotti.map( prodotti => 
            
            <div>
                <h3 style={{color: "green"}}>{prodotti.name}</h3>
                <img width="200" height ="100" src={prodotti.img} alt="product"></img><br />
                <p>{prodotti.price}</p><br />
                <p>{prodotti.caption}</p>
                <hr />

            </div>
        )
       
     return (  
        <div id="div">
            {prdcMap}
        </div>
        );
    }
}
 
export default Product;