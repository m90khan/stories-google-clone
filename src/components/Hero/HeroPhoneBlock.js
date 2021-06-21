import React from 'react';
import imgSrc from '../../assets/hero-phone-frame-v2.png';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const videoUrl =
  'https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0';

export default function HeroPhoneBlock() {
  const phoneRef = useRef(null);

  useEffect(() => {
    function intro() {
      console.log({ c: phoneRef.current });
      const tl = gsap.timeline({});
      tl.fromTo(phoneRef.current, { y: 200 }, { duration: 1, y: 0 });
      return tl;
    }
    function stopTrigger() {
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: phoneRef.current,
          start: 'top top', // first: position of element second: position of the container
          end: '+=1000',
          scrub: true,
          pin: true,
          // anticipatePin: 1,
          markers: true,
        },
      });

      // add animations and labels to the timeline
      tl.to(phoneRef.current, { scale: 1.2 }, '+=0.2'); // scale from 1.2 to .2 % overtime
      tl.to(
        '.hero-container',
        {
          // selector text, Array, or object
          backgroundColor: 'black', // camelCase
          duration: 0.45, // seconds
        },
        '-=0.5'
      );

      return tl;
    }
    const master = gsap.timeline();
    master.add(intro()); //with a gap of 2 seconds

    // could not make it with delay from gsap
    setTimeout(() => {
      master.add(stopTrigger());
    }, 1000);
  }, []);

  return (
    <HeroPhone ref={phoneRef}>
      <div className='hero-phone-template' style={{ backgroundImage: `url(${imgSrc})` }}>
        <video
          className='collage-element'
          playsinline=''
          autoPlay
          webkit-playsinline=''
          loop
          // poster="https://lh3.googleusercontent.com/AJYQSvDZk4lqSWgBeiKFnE6OXdWWp8up4UdugQPqDVqpV4sW4DOtxzOTcuMJYlU771xp4nhG4mCUrOcPM3HiEbxns9QpTz90wLe13w=s0"
          src={videoUrl}
        ></video>
      </div>
    </HeroPhone>
  );
}

const HeroPhone = styled.div`
  position: absolute;
  width: 364px;
  height: 650px;
  top: 0;
  left: 50%;
  transform: translateX(-40%) scale(1.5);
  .hero-phone-template {
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;

    overflow: hidden;
    video {
      position: absolute;
      max-width: 64%;
      height: auto;
      top: 5%;
      left: 9%;
      border-radius: 2rem;
      overflow: hidden;
    }
  }
`;
