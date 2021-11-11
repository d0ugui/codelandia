import Cover from '../../assets/cover.png';

import './styles.css';

export function SingleCard({ card, handleChoice, flipped, disabled }) {
  function handleClick() {
    if (!disabled) {
      handleChoice(card);
    }
  }

  return (
    <div>
      <div className="card">
        <div className={flipped ? "flipped" : ""}>
          <img className="front" src={card.src} alt="card Front" />
          <img className="back" src={Cover} onClick={handleClick} alt="card back" />
        </div>
      </div>
    </div>
  )
}
