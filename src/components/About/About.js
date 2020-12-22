import React from 'react';

import './AboutCss.css';

import pics from '../../assets/pics.png';

function About() {
  return (
    <section className="section my-section">
      <div class="card my-card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src={pics} alt="Several pictures of my pets (and one of me)" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default About;
