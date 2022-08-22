import  '../css/home.css'
import  ItemListContainer from '../ItemlistContainer/ItemListContainer'
import React from 'react';
import Navbar from '../nav/Navbar'


function Catalogo(){
    return(
        
        
        <div>
     
        <Navbar/> 
        <ItemListContainer/>
      </div>
    )
}


export default Catalogo;