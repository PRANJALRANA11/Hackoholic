
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Main from './Pages/Main';
import Login from './Pages/Login';

function App() {
  return (
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/main" element={<Main/>} />
      <Route path="/register" element={<Login/>} />
      </Routes>
  )

}

export default App;
