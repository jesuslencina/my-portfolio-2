import React from 'react';

import './AboutCss.css';

import pics from '../../assets/pics.png';

function About() {
  return (
    <section className="section my-section">
      <figure class="image is-16by9">
        <img src={pics} alt="Several pictures of my pets (and one of me)" />
      </figure>
    </section>
  );
}

export default About;
