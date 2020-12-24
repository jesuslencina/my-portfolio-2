import React, { useState } from 'react';

import './NavCss.css';

import favicon from '../../assets/icons/other/favicon.png';

function Nav() {
  const [burger, setBurger] = useState('');

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#hero">
          <img src={favicon} width="26" height="26" alt="Icon" />
        </a>
        <p class="navbar-item name">Jesus Lencina</p>

        <button
          className={`navbar-burger my-burger ${burger}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() =>
            burger === '' ? setBurger('is-active') : setBurger('')
          }
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className={`navbar-menu ${burger}`}>
        <div className="navbar-end">
          <a href="#about" className="navbar-item">
            About
          </a>
          <a href="#skills" className="navbar-item">
            Skills
          </a>

          <a href="#education" className="navbar-item">
            Education
          </a>

          <a href="#projects" className="navbar-item">
            Projects
          </a>

          <a href="#contact" className="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
