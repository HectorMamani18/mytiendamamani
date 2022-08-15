import  '../css/home.css'
import  ItemListContainer from '../ItemlistContainer/ItemListContainer'
import React from 'react';
import Navbar from '../nav/Navbar'


function Catalogo(){
    return(
        
        <>
        <div>
        
            <Navbar/>
            <h1 className='Titulo'>Suits for Men</h1>
            </div>
        <ItemListContainer /></>

    )
}


export default Catalogo;