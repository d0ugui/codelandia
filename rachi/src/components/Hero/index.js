import { Button } from '../Button';

import work from '../../assets/work.svg';

import { Container, Content } from './styles';

export function Hero() {
  return (
    <Container>
      <Content>
        <div>
          <h1>
            Rachi,
            <br />
            é tudo que você
            <br />
            precisa em um só lugar
          </h1>
          <Button>Cadastrar-se</Button>
        </div>
        <img src={work} alt="Work from anywhere" />
      </Content>
    </Container>
  );
}
