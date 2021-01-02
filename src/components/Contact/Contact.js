import styled from 'styled-components';

import StyledSection from '../sectionTemplate';

import { useContext } from 'react';

import { Context } from '../Context';

import texts from './contactTexts';

const StyledContact = styled(StyledSection)`
  img {
    width: 100px;
    margin-top: 5rem;
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.25) rotate(-20deg);
    cursor: pointer;
  }
`;

function Contact() {
  const { lang } = useContext(Context);

  return (
    <StyledContact>
      <div className="my-text">
        <h2 className="title is-size-1 has-text-white" id="contact">
          {texts[lang].contact}
        </h2>

        <p className="has-text-white is-size-4">
          {texts[lang].part1} <br /> {texts[lang].part2}
        </p>

        <img
          onClick={() =>
            window.open('https://www.linkedin.com/in/jesuslencina/')
          }
          src="public-assets/linkedin.png"
          alt="LinkedIn"
        />
      </div>
    </StyledContact>
  );
}

export default Contact;
