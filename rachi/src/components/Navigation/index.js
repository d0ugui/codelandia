import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

import { Container } from './styles';

export function Navigation({ showMenu, setShowMenu }) {
  useEffect(() => {
    document.body.style.overflowY = showMenu ? 'hidden' : 'auto';
  }, [showMenu]);

  return (
    <Container isVisible={showMenu}>
      <IoClose
        size={45}
        onClick={() => setShowMenu(false)}
      />
      <nav>
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
      </nav>
    </Container>
  );
}
