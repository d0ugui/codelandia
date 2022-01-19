import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background: #EFF8FF;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 70%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    h2 {
      font-size: 32px;
      font-family: 'Sora', sans-serif;
      font-weight: 600;
    }

    p {
      color: #6E7275;
      font-family: 'Inter', sans-serif;
      width: 444px;
      margin-top: 24px;
    }

    div {
      img + img {
        margin-left: 25px;
        margin-top: 35px;
      }
    }
  }

  div + div {
    margin: 37px 0;
  }
`;
