import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../../context/alert";

const Navbar = () => {

const context = useContext(AlertContext);
  const navigate = useNavigate();

  const { showAlert } = context;
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    showAlert("Logged out successfully")
    navigate("/login");
  }

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
            {localStorage.getItem('token') ?
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/user">User</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/account">Account</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/transaction">Transaction</Link>
                </li>
              </>
              : ""}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
          </ul>
          {!localStorage.getItem('token') ?
            <form className="d-flex">
              <Link to="/login"><button className="btn btn-primary " type="submit">Login</button></Link>
              <Link className='mx-2' to="/signup"> <button className="btn btn-primary" type="submit">Signup</button></Link>
            </form>
            : <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar;





