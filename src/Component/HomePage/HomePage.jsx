import React from 'react'
import Dashboard from '../Dashboard/Dashboard';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className='d-flex '>
        <Dashboard />
        <Main />
      </div>
    </div>
  )
}

export default Homepage;