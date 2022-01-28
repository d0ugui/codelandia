import { Link } from 'react-scroll';
import { Container } from './styles';

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <nav>
        <img src={logo} alt="Rachi" />

        <ul>
          <li>
            <Link to="works" spy smooth offset={-200} duration={100}>
              Funcionalidades
            </Link>
          </li>
          <li>
            <Link to="app" spy smooth offset={-230} duration={100}>
              App
            </Link>
          </li>
          <li>
            <Link to="plans" spy smooth offset={-50} duration={100}>
              Planos
            </Link>
          </li>
          <li>
            <Link to="contact" spy smooth offset={-100} duration={100}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
