import React from 'react';

import coding from './codingSkills';
import KnowledgeItem from './KnowledgeItem';

function Knowledge() {
  const codingList = coding.map((item) => (
    <KnowledgeItem name={item.name} img={item.img} />
  ));

  return (
    <section className="section is-flex-direction-column is-align-items-center">
      <h2 className="title is-size-1">SKILLS</h2>
      <h3 className="subtitle">Coding</h3>
      <div className="tile tile is-ancestor">{codingList}</div>
    </section>
  );
}

export default Knowledge;
