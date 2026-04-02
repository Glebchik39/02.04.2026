import logo from './logo.svg';
import './App.css';
import {Block} from './components/Block/Block'
import { BrowserRouter, Routes,Route, Router } from 'react-router-dom';
import {Header} from './components/Header/Header'
import {Teory} from './components/Teory/Teory'

function App() {
  return (
    <BrowserRouter>
    <center><h1>Тема 1</h1></center>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Block/>}/>
      <Route path='/about' element={<Teory></Teory>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
