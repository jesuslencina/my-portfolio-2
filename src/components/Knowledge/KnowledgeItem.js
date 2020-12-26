import React, { useState } from 'react';
import disableScroll from 'disable-scroll';

function KnowledgeItem(props) {
  const [modal, setModal] = useState('');

  const handleModal = () => {
    if (modal === '') {
      setModal('is-active');
      disableScroll.on();
    } else {
      setModal('');
      disableScroll.off();
    }
  };

  return (
    <>
      <div className="tile is-parent" onClick={handleModal}>
        <div className="tile is-child box my-item">
          <img src={props.img} alt={props.name} />
          <p>{props.name}</p>
        </div>
      </div>

      <div className={`modal my-modal ${modal}`}>
        <div className="modal-background" onClick={handleModal}></div>
        <div className="modal-card">
          <section className="modal-card-body ">
            <img src={props.img} alt={props.name} />
            <div className="ml-3">
              <h4 className="title mb-0">{props.name}</h4>
              <p>{props.desc}</p>
            </div>
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
