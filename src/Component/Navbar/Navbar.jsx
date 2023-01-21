import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar navbar-dark sticky-top   flex-md-nowrap p-2  px-5" style={{background: "#51438F"}}>
    <Link   className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-2" to="/">SHAFFOF QURILISH</Link>
    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     <div className="dropdown me-5">
      <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="46" height="42" className="rounded me-3" />
        <div className='pt-2'><span>Luke Assote</span><p>Admin for Associations</p></div>
      </Link>
      <ul className="dropdown-menu text-small shadow w-100"  >
        <li><Link className="dropdown-item" to="#">My profile</Link></li>
        <li><Link className="dropdown-item" to="#">Settings</Link></li>
        <li><Link className="dropdown-item" to="#">Profile</Link></li>
        <li><hr className="dropdown-divider" /></li>
        <li><Link className="dropdown-item" to="#">Sign out</Link></li>
      </ul>
    </div>
  </header>
  )
}

export default Navbar