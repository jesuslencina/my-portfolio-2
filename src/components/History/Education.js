import { useContext } from 'react';

import { Context } from '../Context';

import styled from 'styled-components';

import StyledSection from '../sectionTemplate';

import texts from './educationTexts';

import education from './educationData';
import EducationItem from './EducationItem';

const StyledEducation = styled(StyledSection)`
  .my-edu-item img {
    padding: 1rem;
    width: 15%;
  }

  .my-edu-card {
    transition: transform 0.25s;
  }

  .my-edu-card:hover {
    transform: scale(1.05);
  }

  .my-edu-list {
    margin: 1rem 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 769px) {
    .my-edu-item img {
      width: 50%;
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
