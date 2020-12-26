import projects from './projectsData';
import ProjectItem from './ProjectItem';

import { useContext } from 'react';

import { Context } from '../Context';

import texts from './projectTexts';

import './ProjectCss.css';

function Projects() {
  const { lang } = useContext(Context);

  const projectList = projects[lang].map((item) => (
    <ProjectItem
      key={item.id}
      name={item.name}
      img={item.img}
      madeFor={item.madeFor}
      desc={item.desc}
      link={item.link}
      used={item.used}
    />
  ));

  return (
    <section className="section my-knowledge" id="projects">
      <h2 className="title is-size-1">{texts[lang].projects}</h2>
      <div className="container">{projectList}</div>
    </section>
  );
}

export default Projects;
