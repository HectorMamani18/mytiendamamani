import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Detalles from './components/pages/Detalles';
import Catalogo from './components/pages/Catalogo';
import Cart from './components/pages/Cart'

function App() {
  
  return (
    <div className="App">
     
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/Catalogo' element={<Catalogo/>}/>
        <Route path='/Detalles'element={<Detalles/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
     
     
     </div>
  );
}

export default App;