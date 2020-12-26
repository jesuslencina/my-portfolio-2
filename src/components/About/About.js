import React from 'react';

import './AboutCss.css';

import pics from '../../assets/pics.png';

import { useContext } from 'react';

import { Context } from '../Context';

import texts from './aboutTexts';

function About() {
  const { lang } = useContext(Context);

  return (
    <section className="section my-section" id="about">
      <figure class="image is-16by9">
        <img
          src={pics}
          alt="Several pictures of my pets (and one of me)"
          className="pics"
        />
      </figure>

      <div className="my-text">
        <h2 className="title is-size-1 has-text-white">{texts[lang].whoami}</h2>

        <p className="has-text-white is-size-4">{texts[lang].about}</p>
      </div>
    </section>
  );
}

export default About;
