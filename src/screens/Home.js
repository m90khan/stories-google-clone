import React, { useState, useEffect } from 'react';
import FeatureSlides from '../components/FeatureSlides';
import Hero from '../components/Hero';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { Hide } from '../styles/styles';

export default function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      '.loader-1',
      {
        x: 0,
      },
      {
        opacity: 1,
        duration: 1,
        x: '-50vw',
        delay: 0.5,
      }
    );
    gsap.fromTo(
      '.loader-2',
      {
        x: 0,
      },
      {
        opacity: 1,
        duration: 1,
        x: '50vw',
        delay: 0.5,
      }
    );
  }, []);

  return loader ? (
    <LoaderContainer>
      <div className='loader loader-1'>
        <Hide>
          <h1 className='loader-heading'>Stories Agency ..</h1>
        </Hide>
      </div>
      <div className='loader loader-2' />
    </LoaderContainer>
  ) : (
    <>
      <Hero />
      <FeatureSlides />
      <div className='footer'>Build your ideal story today.</div>
    </>
  );
}

const LoaderContainer = styled.div`
  .loader {
    position: fixed;
    width: 50vw;
    height: 100vh;
    top: 0;

    &-1 {
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        font-size: 3vw;
        color: black;
        font-weight: 900;
        line-height: 1.5;
      }
    }
    &-2 {
      left: 50%;
      background-color: #101010;
    }
  }
`;
