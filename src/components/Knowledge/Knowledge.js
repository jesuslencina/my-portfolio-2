import React from 'react';

import { coding, languages } from './knowledgeData';

import KnowledgeItem from './KnowledgeItem';

import './KnowledgeCss.css';

function Knowledge() {
  const codingList = coding.map((item) => (
    <KnowledgeItem
      key={item.id}
      name={item.name}
      img={item.img}
      desc={item.desc}
    />
  ));

  const langList = languages.map((item) => (
    <KnowledgeItem
      key={item.id}
      name={item.name}
      img={item.img}
      desc={item.desc}
    />
  ));

  return (
    <section className="section my-knowledge" id="skills">
      <h2 className="title is-size-1">SKILLS</h2>
      <p className="mb-3">Click on each item to read a brief description!</p>
      <h3 className="subtitle is-size-3 mt-1">Coding</h3>
      <div className="tile tile is-ancestor">
        <div className="tile is-parent my-container">{codingList}</div>
      </div>

      <h3 className="subtitle is-size-3 mt-1">Languages</h3>
      <div className="tile tile is-ancestor">
        <div className="tile is-parent my-container">{langList}</div>
      </div>
    </section>
  );
}

export default Knowledge;
