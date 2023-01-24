import {  Route, Routes } from 'react-router-dom';
import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Homepage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<Homepage />} />
        <Route path="/" element={<LoginPage />} />
       </Routes>
       <ToastContainer />

     </div>
  );
}

export default App;
