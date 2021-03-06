import React from 'react';

import styled from 'styled-components';

import ScrollAnimation from 'react-animate-on-scroll';

import StyledSection from '../sectionTemplate';

import pics from '../../assets/pics.png';

import { useContext } from 'react';

import { Context } from '../Context';

import texts from './aboutTexts';

const StyledAbout = styled(StyledSection)`
  animation-duration: 1.5s;

  img {
    width: 40vw;
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.05);
  }

  .introduction {
    width: 50%;
  }

  @media screen and (max-width: 769px) {
    img {
      width: 80vw;
    }

    .introduction {
      width: 90%;
      font-size: 1.25rem;
    }
  }
`;

function About() {
  const { lang } = useContext(Context);

  return (
    <StyledAbout className="animate__fadeIn">
      <img
        id="about"
        src={pics}
        alt="Several pictures of my pets (and one of me)"
      />

      <div className="introduction">
        <ScrollAnimation animateOnce animateIn="bounceIn">
          <h2 className="title is-size-1 has-text-white">
            {texts[lang].whoami}
          </h2>
          <p className="has-text-white is-size-4">{texts[lang].about}</p>
        </ScrollAnimation>
      </div>
    </StyledAbout>
  );
}

export default About;
