import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { HeroTextContainer, Hide } from './../../styles/styles';
export default function HeroHeader() {
  useEffect(() => {
    gsap.fromTo(
      '.hero-text',
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        duration: 0.5,
        y: 0,
        delay: 0.5,
      }
    );
  }, []);
  return (
    <HeroTextContainer>
      <Hide>
        <h1 className='hero-text'>
          <span>Stories</span> meet their{' '}
        </h1>
      </Hide>
      <Hide>
        <h1 className='hero-text'> wides audience ever</h1>
      </Hide>
    </HeroTextContainer>
  );
}
