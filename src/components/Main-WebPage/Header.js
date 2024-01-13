import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm px-4" style={{backgroundColor: "#1C1C1C"}}>
      <a className="navbar-brand fw-bold" href="#" style={{fontSize: '26px'}}>
        CondensaCore
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav1"
        aria-controls="nav1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="nav1">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item px-lg-3 px-md-1">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item px-lg-3 px-md-1">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item px-lg-3 px-md-1">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item px-lg-3 px-md-1">
            <a className="nav-link" href="#">About Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
