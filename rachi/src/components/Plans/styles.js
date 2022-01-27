import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 70%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 50px;
  }

  p {
    color: #6E7275;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    margin-top: 16px;
    max-width: 570px;
    text-align: center;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 96px;
  margin-bottom: 130px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
