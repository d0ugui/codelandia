import { FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import { Container } from './styles';

export function Header({ showMenu, setShowMenu }) {
  return (
    <Container>
      <nav>
        <img src={logo} alt="Rachi" />

        <ul>
          <li>
            <a href="#">
              Funcionalidades
            </a>
          </li>
          <li>
            <a href="#">
              App
            </a>
          </li>
          <li>
            <a href="#">
              Planos
            </a>
          </li>
          <li>
            <a href="#">
              Contato
            </a>
          </li>
        </ul>

        { !showMenu && (
          <FaBars
            size={28}
            onClick={() => setShowMenu(true)}
          />
        )}
      </nav>
    </Container>
  );
}
