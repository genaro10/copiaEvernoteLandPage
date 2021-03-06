import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Inicio from './Components/Inicio';
import InicioSegundo from './Components/InicioSegundo';
import Empresas from './Components/Empresas';
import IntegracionAplicaciones from './Components/IntegracionAplicaciones';
import EscaneoDocumentos from './Components/EscaneoDocumentos';
import WebClipper from './Components/WebClipper';
import NotasEnriquecidas from './Components/NotasEnriquecidas';
import Pricing from './Components/Pricing';
import Last from './Components/Last';
import Enlaces from './Components/Enlaces';

function App() {
  return (
    <div>
      <NavBar/>
      <Inicio/>
      <InicioSegundo/>
      <Empresas/>
      <IntegracionAplicaciones/>
      <EscaneoDocumentos/>
      <WebClipper/>
      <NotasEnriquecidas/>
      <Pricing/>
      <Last/>
      <Enlaces/>
    </div>
  );
}

export default App;
