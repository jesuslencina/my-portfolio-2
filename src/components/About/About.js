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
        <h2 className="title my-title">WHO'S THIS GUY?</h2>

        <p>
          Hey there! My name is Jesus, and I'm a trainee web developer. I'm 19
          years old, and I live in Córdoba, Argentina. Apart from coding, my
          passions are learning languages, taking photographs, and taking care
          of my pets. Nice to meet you!
        </p>
      </div>
    </section>
  );
}

export default About;
