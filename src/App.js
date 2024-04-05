
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Main from './Pages/Main';
import Login from './Pages/Login';
import ExerA from './Components/Minfullness/Exer_A';
import ExerB from './Components/Minfullness/Exer_B';
import ExerC from './Components/Minfullness/Exer_C';
import ExerD from './Components/Minfullness/Exer_D';
import ExerE from './Components/Minfullness/Exer_E';
function App() {
  return (
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/main" element={<Main/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/exerA" element={<ExerA/>} />
      <Route path="/exerB" element={<ExerB/>} />
      <Route path="/exerC" element={<ExerC/>} />
      <Route path="/exerD" element={<ExerD/>} />
      <Route path="/exerE" element={<ExerE/>} />

      {/* <Route path="/mindfullness" element={<Mind_Compo/>} /> */}
      
      </Routes>
  )

}

export default App;
