import { useContext } from 'react';

import { Context } from '../Context';

import texts from './educationTexts';

import education from './educationData';
import EducationItem from './EducationItem';

import './EducationCss.css';

function Education() {
  const { lang } = useContext(Context);

  const educationList = education[lang].map((item) => (
    <EducationItem
      key={item.id}
      img={item.img}
      place={item.place}
      title={item.title}
      desc={item.desc}
    />
  ));

  return (
    <section className="section my-section" id="education">
      <h2 className="title is-size-1 has-text-white ">
        {texts[lang].education}
      </h2>
      <div className="my-edu-list">{educationList}</div>
    </section>
  );
}

export default Education;
