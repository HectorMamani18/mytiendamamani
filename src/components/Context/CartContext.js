import React from 'react'
import { useState } from 'react';


export const Context = React.createContext([]);
export  default  function CartContext({children}) {

    const {Cart,setCart} = useState([]);
    const addCartItem = (id) => {
        const listActual =[...Cart, id]
        setCart(listActual)

        console.log('>>elementos del carrito',listActual)
        

    }
    return (
        <Context.Provider value={{addCartItem, cartData :Cart}}>
            {children}
        </Context.Provider>
    )
}
