import React from 'react';
import { Route } from "react-router-dom";
import Card from "./components/Card/Card.jsx"
//components
import Buscador from "./components/Buscador/Buscador"
import Favoritos from "./components/Favoritos/Favoritos.jsx"



import './App.css';

function App() {
  return (
    <div> <>
      <Route exact path="/" component={Buscador}/>
      <Route exact path= "/favoritos" component= {Favoritos}/>
    </>
   <div>
     
   </div>
    
    
    </div>
  );
}

export default App;
