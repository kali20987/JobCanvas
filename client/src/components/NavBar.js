import React from "react";
import { Link } from "react-router-dom";

import { useState } from 'react'

export default function Navbar() {

  const [searchInput, setSearchInput] = useState()

  const API_ID = '039bd7f5';
  const API_KEY = 'e3e8bbf73557a797731aaadbc6f363fb';
  
  
  async function jobSearch(input) {
    const data = await fetch(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=50&title_only=${searchInput}`
    );
    const jsonData = await data.json();
    const jobData = jsonData.results;
    console.log(jobData);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav-main">
      <Link className="navbar-brand" to="/">Our Logo</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jobposting">Job Posting</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
        </ul>

        <div className="search-container">
              
             <input 
              id="input" type="text" className="input" placeholder="Search..."
              onChange={(event) => setSearchInput(event.target.value)}
              />
              <button id="searchBtn" className="searchBtn" onClick={jobSearch} >Search</button>
          
        </div>

      </div>
    </nav>
  );
}


