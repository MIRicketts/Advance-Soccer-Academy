import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Advance Soccer Scheduler</Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/offers">Offers</Link>
          </li>

        </ul>
      </div>
    </nav>
  )
}


export default Navbar;