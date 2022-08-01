import './App.css';
import React from 'react';
import  {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Logo from './components/nav/CartWidget';
import  ItemCount  from './components/catalogo/ItemCount'


const onAdd= (quantity) =>{
  console.log(`compraste ${quantity}unidades`);
}



function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Logo/>
     </Router>
     <section>
      <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount>
     </section>
     </div>
  );
}

export default App;