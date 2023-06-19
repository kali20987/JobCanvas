import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
// import MiniLogo from '../images/minilogo.svg'
import JCLogo from '../images/jobcanvasjc.png'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nunito-sans-font" id="nav-main">
      <Link className="navbar-brand" to="/"><img src={JCLogo} alt="..."/></Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link font-weight-bold" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link font-weight-bold" to="/jobposting">
              Job Posting
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link font-weight-bold" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link font-weight-bold" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}


