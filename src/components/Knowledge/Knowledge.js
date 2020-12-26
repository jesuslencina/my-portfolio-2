import React from 'react';

import { useContext } from 'react';

import { Context } from '../Context';

import texts from './knowledgeTexts';

import { coding, languages } from './knowledgeData';

import KnowledgeItem from './KnowledgeItem';

import './KnowledgeCss.css';

function Knowledge() {
  const { lang } = useContext(Context);

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

  return (
    <section className="section my-knowledge" id="skills">
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
    </section>
  );
}

export default Knowledge;
