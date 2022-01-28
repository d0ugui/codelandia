import { Title } from '../Title';

import connections from '../../assets/connections.svg';
import free from '../../assets/free.svg';
import happy from '../../assets/happy.svg';

import { Container } from './styles';

export function Works() {
  return (
    <Container id="works">
      <Title>
        Como funciona
      </Title>

      <ul>
        <li>
          <img src={connections} alt="conexões" />
          <span>Crie conexões</span>
          <p>Lorem ipsum dolor sit amet consecteteu.</p>
        </li>
        <li>
          <img src={free} alt="conexões" />
          <span>100% gratuito</span>
          <p>Lorem ipsum dolor sit amet consecteteu.</p>
        </li>
        <li>
          <img src={happy} alt="conexões" />
          <span>Compartilhamento</span>
          <p>Lorem ipsum dolor sit amet consecteteu.</p>
        </li>
      </ul>
    </Container>
  );
}
