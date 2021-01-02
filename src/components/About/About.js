import React from 'react';

import styled from 'styled-components';

import StyledSection from '../sectionTemplate';

import pics from '../../assets/pics.png';

import { useContext } from 'react';

import { Context } from '../Context';

import texts from './aboutTexts';

const StyledAbout = styled(StyledSection)`
  img {
    width: 40vw;
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.05);
  }

  div {
    width: 50%;
  }

  @media screen and (max-width: 769px) {
    img {
      width: 80vw;
    }

    div {
      width: 90%;
      font-size: 1.25rem;
    }
  }
`;

function About() {
  const { lang } = useContext(Context);

  return (
    <StyledAbout>
      <img
        id="about"
        src={pics}
        alt="Several pictures of my pets (and one of me)"
      />

      <div>
        <h2 className="title is-size-1 has-text-white">{texts[lang].whoami}</h2>

        <p className="has-text-white is-size-4">{texts[lang].about}</p>
      </div>
    </StyledAbout>
  );
}

export default About;
