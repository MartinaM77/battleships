import React from 'react';

export default function BattleCell({ row, col, isShip }) {
  return <div className='cell'> {isShip ? 's' : ''} </div>;
}
