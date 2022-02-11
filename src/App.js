import './App.css';
import Consultas from './components/consulta/Consulta';
import Faturamento from './components/Faturamento/Faturamento';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';

function App() {
  return (

    <div>
      <MenuSuperior />
      <Resumo/>
      <Consultas/>
      <Faturamento/>
    </div>
  );
}

export default App;
