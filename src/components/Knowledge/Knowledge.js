import React from 'react';

import KnowledgeItem from './KnowledgeItem';

import './KnowledgeCss.css';

function Knowledge() {
  //LIST
  const coding = ['HTML', 'CSS', 'SASS', 'JAVASCRIPT', 'REACT'];

  const codingList = coding.map((item) => <KnowledgeItem name={item} />);

  return (
    <section className="section my-knowledge">
      <h2 className="title is-size-1">SKILLS</h2>
      <h3 className="subtitle is-size-3 mt-1">Coding</h3>
      <div className="tile tile is-ancestor">
        <div className="tile is-parent my-container">{codingList}</div>
      </div>
    </section>
  );
}

export default Knowledge;
