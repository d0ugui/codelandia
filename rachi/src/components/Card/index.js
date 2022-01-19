import { Button } from '../Button';

import { Container } from './styles';

export function Card({ title, value, special }) {
  return (
    <Container special={special}>
      <h3>{title}</h3>
      {special
        && (
        <a href="#">
          Preferido
        </a>
        )}
      <div>
        <span>R$</span>
        <span>{value ? `${value}` : '28'}</span>
        <span>/mês</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec lacinia mi quis euismod ultrices.
      </p>
      <Button card>
        Assinar
      </Button>
    </Container>
  );
}
