import React, { useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import useOnScreen from '../../hooks/useOnScreen';
export default function FeatureSlide({ title, description, updateActiveImage, index }) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      console.log(index);
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <FeatureSlideContainer ref={ref}>
      <h3 className='feature-slide-title'>{title}</h3>
      <p className='feature-slide-description'>{description}</p>
    </FeatureSlideContainer>
  );
}

const FeatureSlideContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: 0 auto;

  .feature-slide-title {
    font-size: 6vw;
    text-transform: uppercase;
    font-weight: 900;
    font-family: 'Fugaz One', cursive;
  }
  .feature-slide-description {
    font-size: 1.5rem;
    margin-top: 30px;
    line-height: 1.3;
  }
`;
