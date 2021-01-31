import React, { useState, useContext } from 'react';

import styled from 'styled-components';

import { Link, animateScroll as scroll } from 'react-scroll';

import { Context } from '../Context';

import texts from './navTexts';

import favicon from '../../assets/favicon.png';

const StyledNav = styled.nav`
  animation-duration: 2s;

  .navbar-brand:hover {
    cursor: pointer;
  }

  .name {
    margin: 0;
    padding: 0;
    font-weight: 800;
  }

  .my-burger {
    background-color: white;
    border: none;
  }

  .my-burger:focus {
    outline: none;
  }

  .switch-button {
    margin: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-flag {
    width: 24px;
    margin-right: 0.25rem;
  }
`;

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
    <StyledNav
      className="navbar is-fixed-top animate__fadeInDown"
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
        <p class="navbar-item name" onClick={() => scroll.scrollToTop()}>
          {' '}
          {texts[lang].name}
        </p>

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
            <a
              href="#about"
              className="has-text-primary"
              onClick={handleBurger}
            >
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
            <a
              href="#skills"
              className="has-text-primary"
              onClick={handleBurger}
            >
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
            <a
              href="#education"
              className="has-text-primary"
              onClick={handleBurger}
            >
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
            <a
              href="#projects"
              className="has-text-primary"
              onClick={handleBurger}
            >
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
            <a
              href="#contact"
              className="has-text-primary"
              onClick={handleBurger}
            >
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
    </StyledNav>
  );
}

export default Nav;
