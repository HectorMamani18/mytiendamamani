import React from 'react'
import ItemListContainer from '../List/ItemlistContainer/ItemListContainer'
import Navbar from '../nav/Navbar'
import '../css/home.css'
import { useParams } from 'react-router-dom'


const Boda = () => {
  const{bodaId}= useParams()
  return (

    
    <div>
     
      <Navbar/>
      <h1 className='Titulo'>Suits for Men</h1> 
      <ItemListContainer bodaId={bodaId}/>
    </div>
    
  )
}

export default Boda