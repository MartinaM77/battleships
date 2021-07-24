import React, { useEffect, useState } from 'react';
import BattleCell from './BattleCell.js';

function createGrid(gridSize) {
  let gridCells = [];
  for (let row = 0; row < gridSize; row++) {
    let gridRow = [];
    for (let col = 0; col < gridSize; col++) {
      gridRow.push({row: row, col: col})
    }
    gridCells.push(gridRow);
  }
  return gridCells;
}

export default function BattleGrid({ size }) {
  const [gridCells, setGridCells] = useState(null);

  useEffect(() => {
    const gridCells = createGrid(size);
    setGridCells(gridCells);
  }, [size]);

  return (
    <div className='grid'>
      { gridCells && gridCells.map((rowData, row) =>
        (
          <div key={'row'+row} className='row'>
            {rowData.map((cellData,col)=>(
              <BattleCell
                key={row+''+col}
                row={row}
                col={col}
              />
            ))}
          </div>
        ))
      }
    </div>
  );
}
