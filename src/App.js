import React, { Component } from 'react';
import './App.css';
import Consultas from './components/consulta/Consulta';
import Faturamento from './components/Faturamento/Faturamento';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import { Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <MenuSuperior/>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Routes>
                <Route path="/consultas" element={<Consultas/>} />
                <Route path="/faturamento" element={<Faturamento/>} />
                <Route path="/" exact element={<Resumo/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
