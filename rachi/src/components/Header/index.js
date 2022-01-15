import { Container } from './styles';

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <nav>
        <img src={logo} alt="Rachi" />

        <ul>
          <li><a href="#">Funcionalidades</a></li>
          <li><a href="#">App</a></li>
          <li><a href="#">Planos</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </Container>
  );
}
