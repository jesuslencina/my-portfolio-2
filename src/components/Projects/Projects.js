import projects from './projectsData';
import ProjectItem from './ProjectItem';

import './ProjectCss.css';

function Projects() {
  const projectList = projects.map((item) => (
    <ProjectItem
      key={item.id}
      name={item.name}
      img={item.img}
      madeFor={item.madeFor}
      desc={item.desc}
      link={item.link}
    />
  ));

  return (
    <section className="section my-knowledge" id="projects">
      <h2 className="title is-size-1">PROJECTS</h2>
      <div className="container">{projectList}</div>
    </section>
  );
}

export default Projects;
