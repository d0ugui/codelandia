import styled from 'styled-components';

export const Container = styled.section`
  height: 640px;
  background-color: #EFF8FF;

  display: flex;
  justify-content: center;
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
`;
