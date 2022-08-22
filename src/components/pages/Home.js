import '../css/home.css'
import Navbar from '../nav/Navbar'
import React from 'react'
import Logo from '../Icon/CartWidget'
import ItemListContainer from '../ItemlistContainer/ItemListContainer'



export default function Home () {
    return(
        <section>
            
           <Navbar className='section'/> 
           <h1 className='Titulo'>Suits for Men</h1>
           <Logo/>

           <br></br>
           <ItemListContainer/>

        

           
        </section>
    )

}