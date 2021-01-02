import React from 'react';

import styled from 'styled-components';

import pics from '../../assets/pics.png';

import { useContext } from 'react';

import { Context } from '../Context';

import texts from './aboutTexts';

const StyledSection = styled.section`
  background-color: #59beb6;
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
  padding: 14rem 0;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  text-align: center;

  img {
    width: 40vw;
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.05);
  }

  .my-text {
    width: 50%;
  }

  @media screen and (max-width: 769px) {
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0% 100%);
    padding: 16rem 0;

    img {
      width: 80vw;
    }

    .my-text {
      width: 90%;
      font-size: 1.25rem;
    }

    .my-title {
      font-size: 2.5rem;
    }
  }
`;

function About() {
  const { lang } = useContext(Context);

  return (
    <StyledSection>
      <img src={pics} alt="Several pictures of my pets (and one of me)" />

      <div className="my-text">
        <h2 className="title is-size-1 has-text-white">{texts[lang].whoami}</h2>

        <p className="has-text-white is-size-4">{texts[lang].about}</p>
      </div>
    </StyledSection>
  );
}

export default About;
