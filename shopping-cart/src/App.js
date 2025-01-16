import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Cartcomp } from './Components/Cartcomp';


function App() {
  return (
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/cart" element={<Cartcomp/>} />
     </Routes>
    </BrowserRouter>
  );
}
export default App;
