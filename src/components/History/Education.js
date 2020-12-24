import education from './educationData';
import EducationItem from './EducationItem';

import './EducationCss.css';

function Education() {
  const educationList = education.map((item) => (
    <EducationItem
      key={item.id}
      img={item.img}
      place={item.place}
      title={item.title}
      desc={item.desc}
    />
  ));

  return (
    <section className="section my-section" id="about">
      <h2 className="title is-size-1 has-text-white">EDUCATION</h2>
      <div className="container">{educationList}</div>
    </section>
  );
}

export default Education;
