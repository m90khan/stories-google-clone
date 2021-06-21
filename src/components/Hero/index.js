import React from 'react';
import styled from 'styled-components';
import HeroCollage from './HeroCollage';
import HeroFooter from './HeroFooter';
import HeroHeader from './HeroHeader';
import HeroPhoneBlock from './HeroPhoneBlock';
import HeroUsedBy from './HeroUsedBy';

// import './style.scss';

export default function Hero() {
  return (
    <div className='hero-container'>
      <HeroHeader />
      <HeroMedia>
        <HeroCollage />
        <HeroPhoneBlock />
      </HeroMedia>
      <HeroUsedBy />
      <HeroFooter />
    </div>
  );
}

const HeroMedia = styled.div`
  position: relative;
  height: 764px;
`;
