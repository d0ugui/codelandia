import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ special }) => (special ? '#293145' : '#EFF8FF')};
  border-radius: 8px;

  h3 {
    font-size: ${({ special }) => (special ? '32px' : '24px')};
    font-family: 'Sora', sans-serif;
    font-weight: 600;
    color: ${({ special }) => (special ? '#fff' : '#293145')};
    margin-top: ${({ special }) => (special ? '32px' : '56px')};
  }

  a {
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    background: #0F9AFE;
    padding: 5px 32px;
    border-radius: 15px;
    margin-top: 13px;
  }

  & > div {
    margin-top: ${({ special }) => (special ? '32px' : '59px')};

    span {
      color: ${({ special }) => (special ? '#fff' : '#293145')};
      font-weight: 700;
      font-family: 'Roboto', sans-serif;
    }

    span:nth-child(1) {
      font-size: 20px;
      position: relative;
      top: -19px;
    }

    span:nth-child(2) {
      font-size: 50px;
    }

    span:last-child{
      font-size: 26px;
    }
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    padding: 0 35px;
    margin-top: 47px;
  }

`;
