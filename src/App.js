import { useState } from 'react';
import './App.css';
import BattleGridContainer from './BattleGridContainer.js';

function App() {
  const [gameId, setGameId] = useState(1);
  const shipData = [
    { type: 'battleship', size: 5, amount: 1 },
    { type: 'destroyer', size: 4, amount: 2 },
  ];

  return (
    <div className='App'>
      <header className='header'>
        <h1>Battleships</h1>
      </header>
      <BattleGridContainer
        gameId={gameId}
        size={10}
        shipData={shipData}
        playAgain={() => setGameId(gameId + 1)}
      />
    </div>
  );
}

export default App;
