import React from 'react';
import { Route } from "react-router-dom";

//components
import Buscador from "./components/Buscador/Buscador"

import Nav from "./components/Nav/Nav"
import About from './components/About/About'
import Favoritos from './components/Favoritos/Favoritos'
import Footer from './components/Footer/Footer'

import './App.css';

function App() {
  return (

    <React.Fragment>

     

      <div class="noFooter">
        <Nav />
        <Route exact path="/" component={Buscador} />
        <Route path="/about" component={About} />
        <Route path="/favoritos" component={Favoritos} />
      </div>
      <Route exact path="/" component={Footer} />

    </React.Fragment>
  );
}

export default App;
