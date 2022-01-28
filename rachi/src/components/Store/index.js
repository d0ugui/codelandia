import google from '../../assets/google.svg';
import apple from '../../assets/apple.svg';
import social from '../../assets/social.svg';

import { Container, Content } from './styles';

export function Store() {
  return (
    <Container id="app">
      <Content>
        <div>
          <h2>Baixe nosso app para desfrutar mais!</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloribus similique ea blanditiis iusto temporibus, ipsam vel ipsa
            ipsum autem asperiores quaerat a? Ad, accusamus asperiores.
          </p>
          <div>
            <a href="#">
              <img src={google} alt="Play Store" />
            </a>
            <a href="#">
              <img src={apple} alt="Apple Store" />
            </a>
          </div>
        </div>

        <div>
          <img src={social} alt="Social Media" />
        </div>
      </Content>
    </Container>
  );
}
