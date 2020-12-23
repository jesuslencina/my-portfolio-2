import React from 'react';

import './AboutCss.css';

import pics from '../../assets/pics.png';

function About() {
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
        <h2 className="title is-size-1 has-text-white">WHO AM I?</h2>

        <p className="has-text-white is-size-4">
          Hey there! My name is Jesus, and I'm a trainee web developer. I'm 19
          years old, and I live in Córdoba, Argentina. Apart from coding, my
          passions are learning languages, taking photographs, and looking after
          my pets. Nice to meet you!
        </p>
      </div>
    </section>
  );
}

export default About;
