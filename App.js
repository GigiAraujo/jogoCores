// Dentro de App.js

import React, { useState } from 'react';

const App = () => {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [gameData] = useState([
    {
      colors: ['#FF0000', ' #add8e6', '#000000'],
      alternatives: ['vermelho, azul, preto', 'rosa, preto, verde', 'amarelo, roxo, rosa'],
      correctAnswer: 'vermelho, azul, preto'
    },
    {
      colors: ['#008000', '#ffff00', '#ffa500'],
      alternatives: ['azul, verde, rosa', 'roxo, vermelho, amarelo', 'verde, amarelo, laranja'],
      correctAnswer: 'verde, amarelo, laranja'
    },
    {
      colors: ['#993399', '#000080', '#008000'],
      alternatives: ['preto, branco, cinza', 'roxo, azul, verde', 'amarelo, rosa, laranja'],
      correctAnswer: 'roxo, azul, verde'
    },
    {
      colors: ['#ffff00 ', ' #ffcbdb ', ' #ffa500'],
      alternatives: ['preto, cinza, branco', 'verde, azul, roxo', 'amarelo, rosa, laranja'],
      correctAnswer: 'amarelo, rosa, laranja'
    },
    {
      colors: ['#964b00', '#90ee90', '#993399'],
      alternatives: ['azul, amarelo, rosa', 'marrom, verde, roxo', 'laranja, rosa, azul'],
      correctAnswer: 'marrom, verde, roxo'
    }
  ]);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const handleGuess = () => {
    const correctAnswer = gameData[currentRoundIndex].correctAnswer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    if (round < 5) {
      setRound(round + 1);
      setCurrentRoundIndex(currentRoundIndex + 1);
      setSelectedOption('');
    } else {
      // Fim do jogo
      setRound(1); // Reinicia as rodadas para jogos futuros
      setCurrentRoundIndex(0); // Reinicia o índice da rodada atual
      alert(`Fim do jogo! Sua pontuação final é: ${score + 1}`); // Adiciona 1 à pontuação para incluir a última rodada
      setScore(0); // Reinicia a pontuação para jogos futuros
    }
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h1>Guess the Colors</h1>
      <p>Round: {round}</p>
      <p>Score: {score}</p>
      <p>Choose the correct combination:</p>
      <div>
        {gameData[currentRoundIndex].colors.map((color, index) => (
          <div key={index} style={{ backgroundColor: color, width: 50, height: 50, margin: 10 }} />
        ))}
      </div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        {gameData[currentRoundIndex].alternatives.map((alternative, index) => (
          <option key={index} value={alternative}>{alternative}</option>
        ))}
      </select>
      <button onClick={handleGuess}>Submit</button>
    </div>
  );
};

export default App;
