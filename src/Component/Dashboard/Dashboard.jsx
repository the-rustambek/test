import React from 'react'
import { Link } from 'react-router-dom';
import "./Dashboard.css"
const Dashboard = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0  " style={{ width: "280px", background: "#51438F", minHeight: "87.5vh" }}>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="#" className="navbar-link  text-white " >
                        Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="#" className="navbar-link  active" aria-current="page">
                        Users
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="navbar-link  text-white">
                        Logout
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Dashboard;