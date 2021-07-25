import React from 'react';

export default function BattleStatistics({
  remainingShipsCount,
  hits,
  attempts,
}) {
  return (
    <div className={remainingShipsCount === 0 ? 'overlay' : 'statistics'}>
      <h2>Game Statistics</h2>
      {remainingShipsCount > 0 && <p>Remaining ships: {remainingShipsCount}</p>}
      <p>Attempts: {attempts}</p>
      {attempts > 0 && (
        <p>Success rate: {Math.floor((hits / attempts) * 100)}%</p>
      )}
    </div>
  );
}
