import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Nexus Bank</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">User</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account">Account</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/transaction">Transaction</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link  to="/login"><button className="btn btn-outline-success " type="submit">Login</button></Link>
            <Link className='mx-2' to="/signup"> <button className="btn btn-outline-success" type="submit">Signup</button></Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;





