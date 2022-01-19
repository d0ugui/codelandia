import { Title } from '../Title';
import { Button } from '../Button';

import { Container, Content } from './styles';

export function Contact() {
  return (
    <Container>
      <Content>
        <Title>Contato</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec lacinia mi quis euismod ultrices.
        </p>
        <div>
          <input type="text" placeholder="Seu email" />
          <Button>Enviar</Button>
        </div>
      </Content>
    </Container>
  );
}
