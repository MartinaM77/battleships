import './App.css';
import BattleGridContainer from './BattleGridContainer.js';

function App() {
  const shipData = [
    { type: 'battleship', size: 5, amount: 1 },
    { type: 'destroyer', size: 4, amount: 2 },
  ];

  return (
    <div className='App'>
      <header className='header'>
        <h1>Battleships</h1>
      </header>
      <BattleGridContainer size={10} shipData={shipData} />
    </div>
  );
}

export default App;
