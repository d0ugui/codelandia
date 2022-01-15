import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px 0;

  width: 100%;
  max-width: 70%;
  margin: 0 auto;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;

      li {
        a {
          color:#6E7275;
          font-size: 18px;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
        }
      }

      li + li {
        margin-left: 66px;
      }
    }
  }
`;
