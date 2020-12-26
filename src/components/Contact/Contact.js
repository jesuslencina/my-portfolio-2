import { useContext } from 'react';

import { Context } from '../Context';

import texts from './contactTexts';

import './ContactCss.css';

function Contact() {
  const { lang } = useContext(Context);

  return (
    <section className="section my-section" id="contact">
      <div className="my-text">
        <h2 className="title is-size-1 has-text-white">
          {texts[lang].contact}
        </h2>

        <p className="has-text-white is-size-4">
          {texts[lang].part1} <br /> {texts[lang].part2}
        </p>

        <img
          onClick={() =>
            window.open('https://www.linkedin.com/in/jesuslencina/')
          }
          className="my-linkedin"
          src="public-assets/linkedin.png"
          alt="LinkedIn"
        />
      </div>
    </section>
  );
}

export default Contact;
