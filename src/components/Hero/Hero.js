import React from 'react';

import './HeroCss.css';

import me from '../../assets/me.png';

function Hero() {
  return (
    <div className="hero is-large">
      <img
        src="public-assets/background-jpg"
        alt="background"
        className="background"
      />
      <div className="hero-body">
        <div className="container is-fluid my-container">
          <div>
            <h1 className="title my-name">Jesus Lencina</h1>
            <h2 className="subtitle my-position is-secondary">
              Frontend Web Developer
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
