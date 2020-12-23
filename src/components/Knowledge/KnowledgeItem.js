import React from 'react';

function KnowledgeItem(props) {
  console.log(props);
  return (
    <div className="tile is-parent">
      <div className="tile is-child box my-item">
        <img
          src={`public-assets/skills/${props.name.toLowerCase()}.png`}
          alt={props.name}
        />
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default KnowledgeItem;
