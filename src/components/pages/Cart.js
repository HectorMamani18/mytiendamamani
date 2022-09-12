import React from 'react'
import Navbar from '../nav/Navbar';
import Logo from '../nav/Icon/CartWidget';

const Cart = () => {
  return (
    <div>
       <Navbar className='section'/> 
           <h1 className='Titulo'>Suits for Men</h1>
           <Logo />
    </div>
  )
}

export default Cart;