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
    width: 80%;

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
      a {
        & + a {
        margin-left: 25px;
        }

        img {
          margin-top: 35px;
        }
      }
    }
  }

  div + div {
    margin: 37px 0;
  }

  @media (max-width: 996px) {
    flex-direction: column;
    padding: 30px 0;

    & > div {
      align-items: center;

      h2 {
        text-align: center;
      }

      p {
        width: 100%;
        text-align: center;
      }

      & > div {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          & + a {
          margin-left: 0px;
          }
        }

        img {
          width: 120px;
        }
      }
    }

    div:nth-child(2) {
      order: -1;
    }
  }

  @media (max-width: 576px) {
    div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 220px;
      }
    }

    & > div {

    }
  }
`;
