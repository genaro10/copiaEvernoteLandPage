import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Inicio from './Components/Inicio';
import InicioSegundo from './Components/InicioSegundo';
import Empresas from './Components/Empresas';
import IntegracionAplicaciones from './Components/IntegracionAplicaciones';
import EscaneoDocumentos from './Components/EscaneoDocumentos';

function App() {
  return (
    <div>
      <NavBar/>
      <Inicio/>
      <InicioSegundo/>
      <Empresas/>
      <IntegracionAplicaciones/>
      <EscaneoDocumentos/>
    </div>
  );
}

export default App;
