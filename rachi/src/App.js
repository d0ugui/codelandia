import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Plans } from './components/Plans';
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
      <Plans />
    </>
  );
}

export default App;
