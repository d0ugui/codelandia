import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 70%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-top: 56px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 109px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px;

      img {
        width: 45px;
        height: 45px;
      }

      span {
        color: #293145;
        font-size: 18px;
        font-weight: 600;
        font-family: 'Sora', sans-serif;
        margin-top: 30px;
      }

      p {
        color: #6E7275;
        font-size: 16px;
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        margin-top: 16px;
        width: 210px;
        text-align: center;
      }
    }
  }
`;
