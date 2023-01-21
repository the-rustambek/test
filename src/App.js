import {  Route, Routes } from 'react-router-dom';
import './App.css';
 import Login from './Component/Login/Login';
 import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
       </Routes>
     </div>
  );
}

export default App;
