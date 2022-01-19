import { Card } from '../Card';
import { Title } from '../Title';

import { Container, Cards } from './styles';

export function Plans() {
  return (
    <Container>
      <Title>Nossos planos</Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
        mi quis euismod ultrices.
      </p>
      <Cards>
        <Card title="Bronze" />
        <Card title="Prata" value="57" special="true" />
        <Card title="Ouro" value="94" />
      </Cards>
    </Container>
  );
}
