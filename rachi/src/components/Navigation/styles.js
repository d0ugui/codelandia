import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: rgb(17, 18, 17, 0.95);
  background: linear-gradient(34deg, rgba(255,255,255,0.75) 0%, rgba(239,248,255,0.75) 100%);

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: 0.5s;

  > svg {
    position: absolute;
    top: 16px;
    right: 16px;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    transform: scale(0.7);
    transition: 0.7s;

    li {
      a {
        font-size: 32px;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        color: #6E7275;
      }
    }
  }

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);


    > svg {
      transform: rotate(0deg);
    }

    nav {
      transform: scale(1);
    }
  `}
`;
