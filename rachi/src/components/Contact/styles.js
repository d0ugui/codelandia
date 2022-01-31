import styled from 'styled-components';

import background from '../../assets/background.png';

export const Container = styled.section`
  width: 100%;
  background: url(${background}) no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
  background-position: bottom;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(41, 49, 69, 0.7);

  h2 {
    color: #fff;
    margin-top: 50px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #DBDBDB;
    width: 528px;
    text-align: center;
    margin-top: 16px;
  }

  & > div {
    margin-top: 99px;
    margin-bottom: 85px;

    input {
      background: transparent;
      outline: none;
      border: none;
      border-bottom: 1px solid #fff;
      font-size: 18px;
      color: #fff;
      font-family: 'Inter', sans-serif;
      width: 300px;
      margin-right: 40px;
      padding: 10px 0;
    }

    button {
      width: 118px;
      height: 38px;
      padding: 0;
      font-size: 18px;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
    }
  }

  @media (max-width: 996px) {
    p {
      width: 60%;
    }
  }

  @media (max-width: 576px) {
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      input {
        width: 70%;
        margin: 0;
      }

      button {
        margin-top: 10px;
      }
    }
  }

`;
