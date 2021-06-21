import styled from 'styled-components';

export const Hide = styled.div`
  overflow: hidden;
`;

export const HeroTextContainer = styled.div`
  max-width: 40%;
  width: calc(100% - 32px);
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;
  text-align: center;
  font-size: 4vw;
  font-weight: 600;
  h1 {
    display: inline-block;
    span {
      font-weight: 900;
    }
  }
`;
