import React from 'react';
import { Route } from "react-router-dom";

//components
import Buscador from "./components/Buscador/Buscador"



import './App.css';

function App() {
  return (
    <>
      <Route exact path="/" component={Buscador} />
    </>
  );
}

export default App;
