import { useContext } from 'react';

import { Context } from '../Context';

import styled from 'styled-components';

import StyledSection from '../sectionTemplate';

import texts from './educationTexts';

import education from './educationData';
import EducationItem from './EducationItem';

const StyledEducation = styled(StyledSection)`
  animation-duration: 1.5s;

  .my-edu-item img {
    padding: 1rem;
    width: 15%;
  }

  .my-edu-card {
    transition: transform 0.25s;
    height: 90%;
  }

  .my-edu-card:hover {
    transform: scale(1.05);
  }

  .my-edu-list {
    margin: 1rem 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .title {
    margin-bottom: 0;
  }

  @media screen and (max-width: 769px) {
    .my-edu-item img {
      width: 50%;
    }

    .my-edu-card {
      height: fit-content;
    }

    .my-edu-list {
      margin: 0;
      grid-template-columns: 1fr;
    }
  }
`;

function Education() {
  const { lang } = useContext(Context);

  const educationList = education[lang].map((item) => (
    <EducationItem
      key={item.id}
      img={item.img}
      place={item.place}
      status={item.status}
      title={item.title}
      desc={item.desc}
    />
  ));

  return (
    <StyledEducation>
      <h2 className="title is-size-1 has-text-white" id="education">
        {texts[lang].education}
      </h2>
      <div className="my-edu-list">{educationList}</div>
    </StyledEducation>
  );
}

export default Education;
