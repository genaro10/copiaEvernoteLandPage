import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Inicio from './Components/Inicio';
import InicioSegundo from './Components/InicioSegundo';
import Empresas from './Components/Empresas';

function App() {
  return (
    <div>
      <NavBar/>
      <Inicio/>
      <InicioSegundo/>
      <Empresas/>
    </div>
  );
}

export default App;
