import { useState } from 'react';

import { GlobalStyle } from './styles/global';
import { Container, CardGrid } from './styles';

function App() {
  const [stage, setStage] = useState(10);

  function handleChange(e) {
    setStage(e.target.value);
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Jogo da memória</h1>
        <select id="stage" onChange={(e) => handleChange(e)}>
          <option value="10">Nível fácil</option>
          <option value="14">Nível médio</option>
          <option value="18">Nível difícil</option>
        </select>
      </Container>
    </>
  );
}

export default App;
