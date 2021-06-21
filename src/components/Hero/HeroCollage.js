import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import { videos, photos } from '../../data/data';
import styled from 'styled-components';
function VideoElement({ src }) {
  return (
    <HeroElement className='hero-element'>
      <video
        className='collage-element'
        playsinline=''
        autoPlay
        webkit-playsinline=''
        loop
        // poster="https://lh3.googleusercontent.com/AJYQSvDZk4lqSWgBeiKFnE6OXdWWp8up4UdugQPqDVqpV4sW4DOtxzOTcuMJYlU771xp4nhG4mCUrOcPM3HiEbxns9QpTz90wLe13w=s0"
        src={src}
      ></video>
    </HeroElement>
  );
}
function ImageElement({ src }) {
  return (
    <HeroElement className='hero-element'>
      <img src={src} className='collage-element' alt='' />
    </HeroElement>
  );
}
export default function HeroCollage() {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length);
  const [leftVideo, rightVideo] = videos;

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5,
    });
    tl.fromTo(
      '.hero-element',
      { y: 300 },
      {
        duration: 1,
        y: 0,
        delay: function (i) {
          return 0.2 * i;
        },
      }
    );
  }, []);

  return (
    <HeroCollageContainer>
      <div className='left-column'>
        {leftImages.map((src) => (
          <ImageElement key={src} src={src} />
        ))}
        <VideoElement src={leftVideo} />
      </div>
      <div className='right-column'>
        <VideoElement src={rightVideo} />
        {rightImages.map((src) => (
          <ImageElement key={src} src={src} />
        ))}
      </div>
    </HeroCollageContainer>
  );
}

const HeroCollageContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 1fr 35%;
  max-width: 95%;
  margin: 0 auto;
  margin-bottom: 10vh;

  .left-column {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
    .hero-element {
      grid-row: 1 / span 5;
      grid-column: 2 / span 1;
      &:first-child {
        grid-row: 2 / span 5;
        grid-column: 1 / span 1;
      }

      &:last-child {
        grid-row: 2 / span 6;
        grid-column: 3 / span 1;
      }
    }
  }
  .right-column {
    grid-row: 1 / span 1;
    grid-column: 3 / span 1;
    .hero-element {
      grid-row: 1 / span 5;
      grid-column: 2 / span 1;
      &:first-child {
        grid-row: 2 / span 5;
        grid-column: 1 / span 1;
      }

      &:last-child {
        grid-row: 2 / span 6;
        grid-column: 3 / span 1;
      }
    }
  }

  .left-column,
  .right-column {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    column-gap: 20px;
    height: 400px;
  }
`;

const HeroElement = styled.div`
  overflow: hidden;
  border-radius: 20px;

  video,
  img {
    object-fit: cover;
    /*   transform-origin: center left; */
    width: 100%;
    height: 100%;
    /* will-change: transform;
    transform: scale(1.1);
      transition: transform 2s cubic-bezier(0.77, 0, 0.175, 1);  */
  }
`;
