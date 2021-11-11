import { useEffect, useState } from 'react';

import Bear from './assets/bear.svg';
import Strawman from './assets/strawman.svg';
import Witch from './assets/witch.svg';
import Coffin from './assets/coffin.svg';
import Zumbi from './assets/zumbi.svg';
import Pumpkin from './assets/pumpkin.svg';

import { GlobalStyle } from './styles/global';
import { Container, CardGrid } from './styles';
import { SingleCard } from './components/SingleCard';

function App() {
  const cardImages = [
    { src: Bear, matched: false },
    { src: Strawman, matched: false },
    { src: Witch, matched: false },
    { src: Coffin, matched: false },
    { src: Zumbi, matched: false },
    { src: Pumpkin, matched: false }
  ];

  const [stage, setStage] = useState(10);
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //* shuffleCards
  function shuffleCards() {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
  }

  //* handleChoice
  function handleChoice(card) {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  //* Compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetChoices();
      } else {
        setTimeout(() => resetChoices(), 1000);
      }
    }
  }, [choiceOne, choiceTwo])

  //* resetChoices 
  function resetChoices() {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  }

  //* start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, [])

  //* setStage dificult
  function handleChange(e) {
    setStage(e.target.value);
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Jogo da memória</h1>
        <select id="stage" onChange={(e) => handleChange(e)}>
          <option value="10">Nível fácil</option>
          <option value="14">Nível médio</option>
          <option value="18">Nível difícil</option>
        </select>
        <CardGrid>
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </CardGrid>
        {console.log(cards)}
      </Container>
    </>
  );
}

export default App;
