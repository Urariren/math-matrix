import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 100%, 0%, 0.6);
  padding: 10px;
`;

export const Header = styled.div`
  font-size: 100px;
  font-weight: 500;
  color: #00ff00;
  opacity: 0;
  animation: ani 2.5s forwards;
  animation-delay: 1s;

  @keyframes ani {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Description = styled.div`
  font-size: 40px;
  font-weight: 400;
  color: #00ff00;
  opacity: 0;
  animation: ani 4.5s forwards;
  animation-delay: 2s;

  @keyframes ani {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
