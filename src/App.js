import {  Route, Routes } from 'react-router-dom';
import './App.css';
 import Login from './Component/Login/Login';
 import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/HomePage/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<Home />} />
        <Route path="/" element={<Login />} />
       </Routes>
       <ToastContainer />

     </div>
  );
}

export default App;
