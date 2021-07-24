import './App.css';
import BattleGrid from './BattleGrid.js';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Battleships</h1>
      </header>
      <BattleGrid size={10}/>
    </div>
  );
}

export default App;
