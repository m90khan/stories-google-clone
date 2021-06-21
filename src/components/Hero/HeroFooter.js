import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HeroTextContainer } from './../../styles/styles';

export default function HeroFooter() {
  const phoneRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: phoneRef.current,
        start: 'top center',
        scrub: true,
        // markers: true,
      },
    });
    tl.to(
      '.hero-container',
      {
        backgroundColor: 'white', // camelCase
        duration: 0.25, // seconds
      },
      '-=2'
    );
  }, []);
  return (
    <HeroTextContainer ref={phoneRef}>
      <h1>Visual stories that feel like yours, because they are.</h1>
    </HeroTextContainer>
  );
}
