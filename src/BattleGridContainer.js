import React, { useEffect, useState } from 'react';
import BattleGrid from './BattleGrid.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function isValid(currentCell, gridCells) {
  if (
    !gridCells[currentCell.row] ||
    !gridCells[currentCell.row][currentCell.col]
  ) {
    return false;
  }

  if (gridCells[currentCell.row][currentCell.col].isShip) {
    return false;
  }

  return true;
}

function getNextCell(currentCell, shipDirection) {
  let nextCell = { ...currentCell };

  switch (shipDirection) {
    case 'left':
      nextCell.row -= 1;
      break;
    case 'top':
      nextCell.col -= 1;
      break;
    case 'right':
      nextCell.row += 1;
      break;
    case 'bottom':
      nextCell.col += 1;
      break;
    default:
      break;
  }

  return nextCell;
}

function createShip(shipSize, gridSize, cells) {
  let gridCells = [...cells];
  let ship = { coordinates: [], isSunk: false };

  let currentCell = {
    row: getRandomInt(gridSize),
    col: getRandomInt(gridSize),
  };
  const directions = ['left', 'top', 'right', 'bottom'];
  const randomIndex = getRandomInt(directions.length - 1);
  let shipDirection = directions[randomIndex];

  if (!isValid(currentCell, gridCells)) {
    return createShip(shipSize, gridSize, gridCells);
  }
  ship.coordinates.push(currentCell);

  for (let i = 1; i < shipSize; i++) {
    let nextCell = getNextCell(currentCell, shipDirection);
    if (!isValid(nextCell, gridCells)) {
      return createShip(shipSize, gridSize, gridCells);
    }
    ship.coordinates.push(nextCell);
    currentCell = nextCell;
  }

  return ship;
}

function createGrid(gridSize, shipData) {
  let gridCells = [];
  let ships = [];

  for (let row = 0; row < gridSize; row++) {
    let gridRow = [];
    for (let col = 0; col < gridSize; col++) {
      gridRow.push({ row: row, col: col, hitState: 'none' });
    }
    gridCells.push(gridRow);
  }

  for (let ship of shipData) {
    for (let i = 0; i < ship.amount; i++) {
      let newShip = createShip(ship.size, gridSize, gridCells);
      ships.push(newShip);
      for (let coordinates of newShip.coordinates) {
        gridCells[coordinates.row][coordinates.col].isShip = true;
      }
    }
  }

  return { cells: gridCells, ships: ships };
}

export default function BattleGridContainer({ size, shipData }) {
  const [gridCells, setGridCells] = useState(null);
  const [ships, setShips] = useState(null);

  useEffect(() => {
    const { cells, ships } = createGrid(size, shipData);
    setGridCells(cells);
    setShips(ships);
  }, [size, shipData]);

  const clickCell = (row, col) => {
    let cells = [...gridCells];
    let allShips = [...ships];

    if (cells[row][col].isShip) {
      cells[row][col].hitState = 'hit';

      let hitShip = allShips.find((ship) => {
        return ship.coordinates.find((coordinate) => {
          return coordinate.row === row && coordinate.col === col;
        });
      });

      let hitCoordinates = hitShip.coordinates.filter((coordinate) => {
        return cells[coordinate.row][coordinate.col].hitState === 'hit';
      });
      if (hitCoordinates.length === hitShip.coordinates.length) {
        hitShip.isSunk = true;
        setShips(allShips);
        for (let coordinates of hitShip.coordinates) {
          cells[coordinates.row][coordinates.col].hitState = 'sunk';
        }
      }
    } else {
      cells[row][col].hitState = 'water';
    }
    setGridCells(cells);
  };

  return <BattleGrid gridCells={gridCells} clickCell={clickCell} />;
}
