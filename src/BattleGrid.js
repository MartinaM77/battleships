import React from 'react';
import BattleCell from './BattleCell.js';

export default function BattleGrid({ gridCells, clickCell }) {
  return (
    <div className='grid'>
      {gridCells &&
        gridCells.map((rowData, row) => (
          <div key={'row' + row} className='row'>
            {rowData.map((cellData, col) => (
              <BattleCell
                key={row + '' + col}
                row={row}
                col={col}
                hitState={cellData.hitState}
                clickCell={clickCell}
              />
            ))}
          </div>
        ))}
    </div>
  );
}
