import './App.css';
import React from 'react';
import  {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Logo from './components/nav/CartWidget';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Logo/>
     </Router>
     </div>
  );
}

export default App;