import './App.css';
import React from 'react';
import  {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Logo from './components/nav/CartWidget';
import ItemDetail from './components/ItemDetailContainer/ItemDetail'
import ItemListContainer from './ItemlistContainer/ItemListContainer';

const onAdd= (quantity) =>{
  console.log(`compraste ${quantity}unidades`);
}



function App() {
  return (
    <div className="App">
     <div>
      <Navbar/>
      <Logo/>
     </div>
     <br></br>
     <div>
      <ItemListContainer />
      <ItemDetail/>
     </div>
     
     </div>
  );
}

export default App;