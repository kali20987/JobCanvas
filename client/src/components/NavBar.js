import React from "react";

export default function Navbar() {
return (
    // <div className="navbar">
    //     <h3>Test: this is the navbar</h3>
    // </div>

//     <div className="container">
//   <nav className="navbar navbar-expand-lg bg-body-tertiary">
//     <div className="container-fluid">
//       <div className="navbar-brand">Job Canvas Temp Navbar</div>
//     </div>
//   </nav>
// </div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav-main">
<a className="navbar-brand" href="/">Our Logo</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
{/* change a tag links to react links (home, profile, login) */}

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <a className="nav-link" href="/">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Profile</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Login/SignUp</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Job Listings</a>
    </li>
  </ul>
  {/* <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form> */}
 
</div>
</nav>

)

}