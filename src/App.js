import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Cart from './components/pages/Cart'
import Boda from './components/pages/Boda'
import  CartContextProvider  from './components/Context/CartContext';
import {ItemDetailContainer} from './components/Detalles/index'
import Detalles from './components/pages/Detalles';









function App() {
  
  return (
    <div className="App">
     <CartContextProvider value={[]}>
      
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/categoria/:id' element={<Boda/>}/>

        <Route path='/item/:idDetail' element={<Detalles/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
     </CartContextProvider>
     
     </div>
  );
}

export default App;