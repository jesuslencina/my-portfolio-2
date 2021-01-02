import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: #59beb6;
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
  padding: 14rem 0;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 769px) {
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0% 100%);
    padding: 16rem 0;
  }
`;

export default StyledSection;
