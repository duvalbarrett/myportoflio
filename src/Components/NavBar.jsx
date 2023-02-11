import React from 'react';

const NavBar = () => {

  return (
    <header class="sticky-top bg-black" style={{ width: "100%" }}>
      <nav class="navbar navbar-expand-lg navbar-dark" id="header">
        <div class="container">
          <a class="navbar-brand" href="" id="logo">
            {"Duval Barrett 🖥️"}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#toggleMobileMenu"
            aria-controls="toggleMobileMenu"
            aria-expanded="false"
            aria-table="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="toggleMobileMenu">
            <ul class="navbar-nav ms-lg-auto">
              <li class="nav-item">
                <a href="#intro" aria-current="page" class="nav-link active">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="#skills" class="nav-link">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a href="#projects" class="nav-link">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
