import React from "react";

const Header = () => {
  return (
    <div style={{ zIndex: 1 }}>
      <nav class="navbar navbar-expand-lg bg-dark">
        <a class="navbar-brand text-white" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav ">
            <a class="nav-item nav-link active text-white" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link text-white" href="#">
              Features
            </a>
            <a class="nav-item nav-link text-white" href="#">
              Pricing
            </a>
            <a class="nav-item nav-link  text-white" href="#">
              Disabled
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
