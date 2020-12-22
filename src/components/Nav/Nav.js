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
        <a className="navbar-item" href="https://bulma.io">
          <img src={favicon} width="26" height="26" alt="Icon" />
        </a>
        <p class="navbar-item name">Jesus Lencina</p>

        <a
          role="button"
          className={`navbar-burger ${burger}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() =>
            burger === '' ? setBurger('is-active') : setBurger('')
          }
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${burger}`}>
        <div className="navbar-end">
          <a href="#" className="navbar-item">
            Home
          </a>
          <a href="#about" className="navbar-item">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
