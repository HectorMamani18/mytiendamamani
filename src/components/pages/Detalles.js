import ItemDetailContainer from '../Detalles/ItemDetailContainer/ItemDetailContainer';
import React from 'react';
import Navbar from '../nav/Navbar';
import Logo from '../nav/Icon/CartWidget'



function Detalles(){

    return(
      <div>
     
      <Navbar/>
      <h1 className='Titulo'>Suits for Men</h1> 
      <Logo/>
      <br></br>
      <ItemDetailContainer/>
    </div>
    )
}


export default Detalles;