import React from 'react';

import { useContext } from 'react';

import { Context } from '../Context';

import texts from './heroTexts';

import './HeroCss.css';

import me from '../../assets/me.png';

function Hero() {
  const { lang } = useContext(Context);

  return (
    <div className="hero is-large" id="hero">
      <img
        src="public-assets/background-pattern.png"
        alt="background"
        className="my-background"
      />
      <div className="hero-body">
        <div className="container is-fluid my-hero-container">
          <div>
            <h1 className="title my-name">{texts[lang].name}</h1>
            <h2 className="subtitle my-position is-secondary">
              {texts[lang].title}
            </h2>
          </div>
          <figure className="image is-1by2">
            <img src={me} alt="me" className="me" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Hero;
