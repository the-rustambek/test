import React from 'react'
import { useSelector } from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';
import Loader from '../loader/loader';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';

function Homepage() {
  const {  singleUsersLoading } = useSelector(
    (state) => state.users
);
  return (

    <>
  {singleUsersLoading ? (<Loader /> ):
    <div>
      <Navbar />
      <div className='d-flex '>
        <Dashboard />
        <Main />
      </div>
    </div>
  }
  </>
  )
}

export default Homepage;