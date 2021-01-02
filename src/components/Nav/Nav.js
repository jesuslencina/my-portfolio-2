import React, { useState, useContext } from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';

import { Context } from '../Context';

import texts from './navTexts';

import favicon from '../../assets/favicon.png';

import './NavCss.css';

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
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          className="navbar-item"
          href="#hero"
          onClick={() => scroll.scrollToTop()}
        >
          <img src={favicon} width="26" height="26" alt="Icon" />
        </a>
        <p class="navbar-item name"> {texts[lang].name}</p>

        <button
          className={`navbar-burger my-burger ${burger}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={handleBurger}
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className={`navbar-menu ${burger}`}>
        <div className="navbar-end">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-item"
          >
            <a href="#about" onClick={handleBurger}>
              {texts[lang].about}
            </a>
          </Link>

          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-item"
          >
            <a href="#skills" onClick={handleBurger}>
              {texts[lang].skills}
            </a>
          </Link>

          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-item"
          >
            <a href="#education" onClick={handleBurger}>
              {texts[lang].education}
            </a>
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-item"
          >
            <a href="#projects" onClick={handleBurger}>
              {texts[lang].projects}
            </a>
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-item"
          >
            <a href="#contact" onClick={handleBurger}>
              {texts[lang].contact}
            </a>
          </Link>

          <button
            onClick={switchLang}
            className="navbar-item button is-primary switch-button"
          >
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
