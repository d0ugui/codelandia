import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Plans } from './components/Plans';
import { Store } from './components/Store';
import { Works } from './components/Works';
import { Footer } from './components/Footer';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header id="home" />
      <Hero />
      <Works id="works" />
      <Store id="apps" />
      <Plans id="plans" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;
