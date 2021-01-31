import React from 'react';

import styled from 'styled-components';

import { useContext, useState } from 'react';

import { Context } from '../Context';

import texts from './knowledgeTexts';

import { coding, languages, more } from './knowledgeData';

import KnowledgeItem from './KnowledgeItem';

const StyledKnowledge = styled.section`
  animation-duration: 1.5s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .my-container {
    display: flex;
    justify-content: space-around;
  }

  .my-item {
    padding: 1rem;
    margin: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s;
  }

  .my-item img {
    width: 5rem;
  }

  .my-item p {
    padding-top: 1rem;
    text-align: center;
  }

  .my-item:hover {
    transform: scale(1.25);
    cursor: pointer;
  }

  .my-modal.is-active section {
    display: flex;
    align-items: center;
  }

  .my-modal.is-active section img {
    width: 20%;
  }

  @media screen and (max-width: 769px) {
    .my-container {
      flex-direction: column;
    }

    .my-item {
      margin-top: 2rem;
    }

    .my-item img {
      width: 12rem;
    }

    .my-modal.is-active section {
      flex-direction: column;
      text-align: center;
    }

    .my-modal.is-active section img {
      width: 40%;
    }
  }
`;

function Knowledge() {
  const { lang } = useContext(Context);

  const [vmore, setVmore] = useState(false);

  const handleVmore = () => {
    vmore ? setVmore(false) : setVmore(true);
  };

  const codingList = coding[lang].map((item) => (
    <KnowledgeItem
      key={item.id}
      name={item.name}
      img={item.img}
      desc={item.desc}
    />
  ));

  const langList = languages[lang].map((item) => (
    <KnowledgeItem
      key={item.id}
      name={item.name}
      img={item.img}
      desc={item.desc}
    />
  ));

  const moreList = more[lang].map((item) => (
    <KnowledgeItem
      key={item.id}
      name={item.name}
      img={item.img}
      desc={item.desc}
    />
  ));

  return (
    <StyledKnowledge id="skills">
      <h2 className="title is-size-1">{texts[lang].skills}</h2>
      <p className="mb-3">{texts[lang].instructions}</p>
      <h3 className="subtitle is-size-3 mt-1">{texts[lang].coding}</h3>
      <div className="tile tile is-ancestor">
        <div className="tile is-parent my-container">{codingList}</div>
      </div>

      <h3 className="subtitle is-size-3 mt-1">{texts[lang].languages}</h3>
      <div className="tile tile is-ancestor">
        <div className="tile is-parent my-container">{langList}</div>
      </div>

      <button onClick={handleVmore} class="button is-primary">
        {!vmore ? texts[lang].viewmore : texts[lang].hidemore}
      </button>

      {vmore ? (
        <>
          <div className="tile tile is-ancestor">
            <div className="tile is-parent my-container">{moreList}</div>
          </div>
        </>
      ) : (
        ''
      )}
    </StyledKnowledge>
  );
}

export default Knowledge;
