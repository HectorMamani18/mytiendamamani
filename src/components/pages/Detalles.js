import Detail from '../ItemDetail/ItemDetail';
import React from 'react';
import Navbar from '../nav/Navbar';
import Logo from '../Icon/CartWidget'



function Detalles(){

    return(
       <div>
        <Navbar/>
        <h1 className='Titulo'>Suits for Men</h1>
           <Logo/>
      <Detail/>
      </div>
    )
}


export default Detalles;