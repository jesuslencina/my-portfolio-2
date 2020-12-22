import React from 'react';

import './AboutCss.css';

function About() {
  return (
    <section className="section my-section">
      <div class="card my-card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img
              src="https://bulma.io/images/placeholders/640x360.png"
              alt="Picture of me"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default About;
