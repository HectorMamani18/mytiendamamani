import Detail from '../Detalles/ItemDetail/ItemDetail'
import React from 'react';
import Navbar from '../nav/Navbar';
import Logo from '../nav/Icon/CartWidget'
import {useParams} from 'react-router-dom'



function Detalles(){
  const {detalleId} =useParams();
    return(
      <div>
     
      <Navbar/>
      <h1 className='Titulo'>Suits for Men</h1> 
      <Logo/>
      <br></br>
      <Detail detalleId={detalleId}/>
    </div>
    )
}


export default Detalles;