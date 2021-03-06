import styled from 'styled-components';

export const Container = styled.section`
  height: 640px;
  background-color: #EFF8FF;

  display: flex;
  justify-content: center;

  @media (max-width: 996px) {
    height: auto;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 70%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #293145;
    font-size: 48px;
    font-weight: 600;
    font-family: 'Sora', sans-serif;
  }

  button {
    margin-top: 50px;
  }

  @media (max-width: 996px) {
    flex-direction: column;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    h1 {
      text-align: center;
    }

    img {
      order: -1;
    }

    button {
      margin-bottom: 50px;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 24px;
    }

    img {
      width: 270px;
    }
  }
`;
