import projects from './projectsData';
import ProjectItem from './ProjectItem';

import styled from 'styled-components';

import { useContext } from 'react';

import { Context } from '../Context';

import texts from './projectTexts';

const StyledProjects = styled.section`
  animation-duration: 1.5s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .my-project {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s;
    margin: 3rem !important;

    &:hover {
      transform: scale(1.05);
    }

    .made-for {
      display: flex;
      align-items: center;

      img {
        width: 24px;
        margin: 0 0.5rem;
      }

      span {
        margin-left: 0.5rem;
      }
    }

    p {
      margin-top: 1rem;
    }

    button {
      width: 100%;
      margin-top: 1rem;
      transition: transform 0.2s;
      font-weight: 600;

      &:hover {
        transform: scale(1.035);
      }
    }
  }

  .my-project-list {
    margin: 1rem 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 769px) {
    .my-project {
      margin: 1rem 0.75rem !important;
    }

    .my-project-list {
      margin: 0;
      grid-template-columns: 1fr;
    }
  }
`;

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
    <StyledProjects id="projects">
      <h2 className="title is-size-1">{texts[lang].projects}</h2>
      <div className="my-project-list">{projectList}</div>
    </StyledProjects>
  );
}

export default Projects;
