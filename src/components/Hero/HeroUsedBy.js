import React from 'react';
import styled from 'styled-components';

export default function HeroUsedBy() {
  return (
    <HeroUsed>
      <div className='hero-usedBy-copy'>
        <p>
          The tappable story format has never been more accessible—to creators and readers
          alike. See what happens when Google brings stories to the open web.
        </p>
      </div>
      <div className='hero-usedBy-logos'>
        <p>Making an impact at</p>
      </div>
    </HeroUsed>
  );
}

const HeroUsed = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20rem auto;

  max-width: 1300px;
  width: calc(100% - 48px);
  position: relative;
  color: white;
  .hero-usedBy-copy {
    margin-bottom: 0;
    padding-left: 52px;
    width: 390px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    p {
      font-size: 2rem;
    }
  }
`;
