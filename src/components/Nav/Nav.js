import React, { useState, useContext } from 'react';

import { Context } from '../Context';

import texts from './navTexts';

import './NavCss.css';

import favicon from '../../assets/icons/other/favicon.png';

function Nav() {
  const { lang, setLang } = useContext(Context);

  const [burger, setBurger] = useState('');

  const switchLang = () => {
    lang === 1 ? setLang(2) : setLang(1);
  };

  const handleBurger = () => {
    burger === '' ? setBurger('is-active') : setBurger('');
  };

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#hero">
          <img src={favicon} width="26" height="26" alt="Icon" />
        </a>
        <p class="navbar-item name"> {texts[lang].name}</p>

        <button
          className={`navbar-burger my-burger ${burger}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={handleBurger}
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className={`navbar-menu ${burger}`}>
        <div className="navbar-end">
          <a href="#about" onClick={handleBurger} className="navbar-item">
            {texts[lang].about}
          </a>
          <a href="#skills" onClick={handleBurger} className="navbar-item">
            {texts[lang].skills}
          </a>

          <a href="#education" onClick={handleBurger} className="navbar-item">
            {texts[lang].education}
          </a>

          <a href="#projects" onClick={handleBurger} className="navbar-item">
            {texts[lang].projects}
          </a>

          <a href="#contact" onClick={handleBurger} className="navbar-item">
            {texts[lang].contact}
          </a>
          <button
            onClick={switchLang}
            className="navbar-item button is-primary switch-button">
            <img
              className="nav-flag"
              src={texts[lang].flag}
              alt={texts[lang].language}
            />
            {texts[lang].language}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
