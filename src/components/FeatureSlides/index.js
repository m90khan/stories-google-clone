import React, { useState } from 'react';
import { featureSlides } from '../../data/data';
import FeatureSlide from './FeatureSlide';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
function RenderImages({ activeFeatureIndex }) {
  return featureSlides.map(({ imageUrl }, index) => (
    <img
      className={cn({ 'as-primary': activeFeatureIndex === index })}
      key={imageUrl}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  ));
}
export default function FeatureSlides() {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  const featureSliderRef = useRef(null);
  const featureSlidesRightRef = useRef(null);
  useEffect(() => {
    function stopTrigger() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureSlidesRightRef.current,
          start: 'top top',
          end: () => `+=${featureSliderRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });

      return tl;
    }
    const master = gsap.timeline();
    master.add(stopTrigger()); //with a gap of 2 seconds
  }, []);

  return (
    <FeatureSlideContainer ref={featureSliderRef} className='feature-slides-container'>
      <div className='feature-slides-left'>
        {featureSlides.map((feature, index) => (
          <FeatureSlide
            updateActiveImage={setFeatureIndex}
            key={feature.imageUrl}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
      <div ref={featureSlidesRightRef} className='feature-slides-right'>
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
      </div>
    </FeatureSlideContainer>
  );
}

const FeatureSlideContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .feature-slides-right {
    height: 100vh;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0;
      transition: all 1s ease-in-out;
      transform: scale(1.3);
      position: absolute;
      top: 0;
      &.as-primary {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }
`;
