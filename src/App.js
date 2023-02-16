import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import Saludos from './components/Saludos';
import Navegacion from './components/Navegacion';
import Mision from './components/Mision';
import Vision from './components/Vision';


function App() {
  return (
    <div className="App">
    <Navegacion/>
    <Routes>
      <Route path='/' element = {<Inicio/>}/>
      <Route path='/Inicio' element = {<Inicio/>}/>
      <Route path='/Saludos' element = {<Saludos/>}/>
      <Route path='/Mision' element = {<Mision/>}/>
      <Route path='/Vision' element = {<Vision/>}/>
    </Routes>
    </div>
  );
}

export default App;
