import React from 'react'
import ItemListContainer from '../List/ItemlistContainer/ItemListContainer'
import Navbar from '../nav/Navbar'
import '../css/home.css'
const Boda = () => {
  return (

    
    <div>
     
      <Navbar/>
      <h1 className='Titulo'>Suits for Men</h1> 
      <ItemListContainer/>
    </div>
    
  )
}

export default Boda