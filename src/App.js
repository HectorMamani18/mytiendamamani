import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Detalles from './components/pages/Detalles';
import Catalogo from './components/pages/Catalogo';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/Catalogo' element={<Catalogo/>}/>
        <Route path='/Detalles'element={<Detalles/>}/>
      </Routes>
     
     
     </div>
  );
}

export default App;