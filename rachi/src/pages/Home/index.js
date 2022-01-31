import { useState } from 'react';

import { Contact } from '../../components/Contact';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Plans } from '../../components/Plans';
import { Store } from '../../components/Store';
import { Works } from '../../components/Works';
import { Footer } from '../../components/Footer';
import { Navigation } from '../../components/Navigation';

import { HomeContainer } from './styles';

export function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Navigation
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <HomeContainer>
        <Header
          id="home"
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        <Hero />
        <Works id="works" />
        <Store id="apps" />
        <Plans id="plans" />
        <Contact id="contact" />
        <Footer />
      </HomeContainer>
    </>

  );
}
