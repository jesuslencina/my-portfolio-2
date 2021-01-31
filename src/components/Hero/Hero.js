import React from 'react';

import { useContext } from 'react';

import { Context } from '../Context';

import styled from 'styled-components';

import texts from './heroTexts';

import me from '../../assets/me.png';

const StyledHero = styled.div`
  animation-duration: 1.5s;

  .my-background {
    position: absolute;
    top: 0;
    z-index: -1;
    opacity: 0.5;
    background-repeat: repeat-y;
  }

  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 10rem 1rem 4rem;
  }

  .my-name {
    font-size: 5rem;
  }

  .my-position {
    font-size: 2.75rem;
  }

  .me {
    width: 20rem;
    transition: transform 0.2s;
  }

  .me:hover {
    transform: scale(1.15);
  }

  @media screen and (max-width: 1023px) {
    .my-background {
      display: none;
    }

    .container {
      flex-direction: column-reverse;
      margin: 6rem 0 4rem;
    }

    .my-name {
      font-size: 4rem;
      text-align: center;
    }

    .my-position {
      font-size: 1.75rem;
      text-align: center;
    }

    .me {
      padding-top: 2rem;
      width: 15rem;
    }
  }
`;

function Hero() {
  const { lang } = useContext(Context);

  return (
    <StyledHero id="hero" className="animate__fadeIn">
      <img
        src="public-assets/background-pattern.png"
        alt="background"
        className="my-background"
      />

      <div className="container is-fluid">
        <div>
          <h1 className="title my-name">{texts[lang].name}</h1>
          <h2 className="subtitle my-position is-secondary">
            {texts[lang].title}
          </h2>
        </div>
        <figure className="image is-1by2">
          <img src={me} alt="me" className="me" />
        </figure>
      </div>
    </StyledHero>
  );
}

export default Hero;
