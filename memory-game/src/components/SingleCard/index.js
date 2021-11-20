import { useState } from 'react';

import Cover from '../../assets/cover.png';

import { Container, CardFlipped } from './styles';

export function SingleCard({ card, handleChoice, flipped, disabled }) {
  const [clicked, setClicked] = useState(null);

  function handleClick() {
    if (!disabled && !clicked) {
      handleChoice(card);
    }
    setTimeout(() => setClicked(false), 500);
  }

  return (

    <Container>
      <CardFlipped className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src={Cover} onClick={handleClick} alt="card back" />
      </CardFlipped>
    </Container>

  )
}
