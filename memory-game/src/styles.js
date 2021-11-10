import styled from "styled-components";

export const Container = styled.div`
  max-width: 860px;
  margin: 40px auto;

  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    color: #ECC839;
    text-shadow: 0px 0px 8px #FF5B00;
    font-size: 72px;
    margin-bottom: 30px;
  }

  select {
    padding: 10px 100px 10px 10px;

    font-size: 18px;
    color: #EE9430;

    margin: 0 auto;
    outline: none;

    background: #2B0E11;
    border: 1px solid #EE9430;
    border-radius: 4px;
  }
`

export const CardGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`