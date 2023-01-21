import React from 'react'
import Dashboard from '../Dashboard/Dashboard';
import Navbar from '../Navbar/Navbar';

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className='d-flex '>
        <Dashboard />
        <div>main page</div>
      </div>
    </div>
  )
}

export default Homepage;