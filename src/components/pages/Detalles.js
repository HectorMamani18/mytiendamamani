import Detail from '../Detalles/ItemDetail/ItemDetail';
import React from 'react';
import Navbar from '../nav/Navbar';
import Logo from '../nav/Icon/CartWidget'



function Detalles(){

    return(
       <div>
        <Navbar/>
        <h1 className='Titulo'>Suits for Men</h1>
        <h2>Detalle de Producto</h2>
           <Logo/>
      <Detail/>
      </div>
    )
}


export default Detalles;