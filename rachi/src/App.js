import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Store } from './components/Store';
import { Works } from './components/Works';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Works />
      <Store />
    </>
  );
}

export default App;
