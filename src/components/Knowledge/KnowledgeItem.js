import React from 'react';

function KnowledgeItem(props) {
  console.log(props);
  return (
    <div className="tile is-child box">
      <img src={props.img[props.name]} alt={props.name} />
      <h4>{props.name}</h4>
    </div>
  );
}

export default KnowledgeItem;
