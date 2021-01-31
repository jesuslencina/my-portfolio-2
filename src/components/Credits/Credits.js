import { useState } from 'react';

import styled from 'styled-components';

const StyledCredits = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 769px) {
    display: none;
  }
`;

function Credits() {
  const [credits, setCredits] = useState(false);

  const handleCredits = () => (credits ? setCredits(false) : setCredits(true));

  return (
    <StyledCredits>
      <a
        href="#credits"
        className="button is-primary is-size-4 mb-6"
        onClick={handleCredits}
      >
        {credits ? 'HIDE CREDITS' : 'SHOW CREDITS'}
      </a>
      {credits ? (
        <div className="container mb-6" id="credits">
          <h2 className="title is-size-1">CREDITS</h2>
          <p className="is-size-4">
            Built using: <a href="https://reactjs.org/">React</a> +{' '}
            <a href="https://create-react-app.dev/">create-react-app</a>
          </p>

          <p className="is-size-4">
            CSS Framework: <a href="https://bulma.io/">Bulma</a>
          </p>

          <p className="is-size-4">
            Animations: <a href="https://animate.style//">Animate.css</a> +{' '}
            <a href="https://github.com/dbramwell/react-animate-on-scroll">
              AnimateOnScroll
            </a>
          </p>

          <p className="is-size-4">
            Scroll lock:{' '}
            <a href="https://www.npmjs.com/package/disable-scroll">
              Disable scroll
            </a>
          </p>

          <p className="is-size-4">
            Smooth scroll:{' '}
            <a href="https://github.com/ganderzz/react-scroll-to">
              React Scroll To
            </a>
          </p>

          <p className="is-size-4">
            Pattern background: <a href="https://patternico.com/">Patternico</a>
          </p>
          <p className="is-size-4">
            Icons: <a href="https://iconscout.com/">IconScout</a>
          </p>
          <p className="is-size-4">
            Drawing: <a href="https://blush.design/">BlushDesign</a>
          </p>
          <p className="is-size-4">
            Flag assets: <a href="CountryFlags.com">CountryFlags.com</a>
          </p>
        </div>
      ) : (
        ''
      )}
    </StyledCredits>
  );
}

export default Credits;
