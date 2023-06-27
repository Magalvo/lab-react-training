import React from 'react';
import { useState } from 'react';
import dice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = () => {
  const [diceImage, setDiceImage] = useState(dice);
  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

  const handleSubmit = () => {
    setDiceImage(dice);

    setTimeout(() => {
      const randomDiceValue = Math.floor(Math.random() * 5) + 1;
      console.log(randomDiceValue);
      setDiceImage(dices[randomDiceValue]);
    }, 1000);
  };

  return (
    <img
      src={diceImage}
      onClick={handleSubmit}
      alt="Dice"
      style={{ cursor: 'pointer', width: '500px', height: 'auto' }}
    />
  );
};

export default Dice;
