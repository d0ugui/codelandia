import styled from 'styled-components';

export const Button = styled.button`
  width: 200px;
  height: 56px;
  background-color: #0F9AFE;
  color: #fff;

  font-size: 20px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;

  padding: 16px 36px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  box-shadow: 1px 3px rgba(19, 125, 224, 0.5);
  transition: all 0.2s ease-in;

  &:hover {
    filter: brightness(0.8);
  }
`;
