import { useContext } from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

import { Context } from '../Context';

import texts from './projectTexts';

function ProjectItem(props) {
  const { lang } = useContext(Context);

  const handleRedirect = () => {
    window.open(props.link);
  };

  const usedList = props.used.map((tag) => {
    return <span class="tag ml-1">{tag}</span>;
  });

  return (
    <ScrollAnimation animateOnce animateIn="bounceIn">
      <div className="card my-project">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.img} alt={props.name} />
          </figure>
        </div>
        <div class="card-content">
          <h4 className="title">{props.name}</h4>
          <div className="made-for">
            <i>{texts[lang].madefor}</i>
            {props.madeFor.includes('jpg') || props.madeFor.includes('png') ? (
              <img src={props.madeFor} alt="Made for this entity" />
            ) : (
              <span>{props.madeFor}</span>
            )}
          </div>
          <div className="mt-3">
            {texts[lang].core} {usedList}
          </div>
          <p>{props.desc}</p>

          <button
            onClick={handleRedirect}
            className="navbar-item button is-primary switch-button"
          >
            {texts[lang].instructions}
          </button>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default ProjectItem;
