import React, { useState } from 'react';

function KnowledgeItem(props) {
  const [modal, setModal] = useState('');

  const handleModal = () => {
    modal === '' ? setModal('is-active') : setModal('');
  };

  return (
    <>
      <div className="tile is-parent" onClick={handleModal}>
        <div className="tile is-child box my-item">
          <img src={props.img} alt={props.name} />
          <p>{props.name}</p>
        </div>
      </div>

      <div className={`modal ${modal}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <section className="modal-card-body">
            <img src={props.img} alt={props.name} />
            <p>{props.desc}</p>
          </section>

          <button className="button is-success" onClick={handleModal}>
            Cool
          </button>
        </div>
      </div>
    </>
  );
}

export default KnowledgeItem;
