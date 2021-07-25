import React from 'react';

export default function BattleCell({ row, col, hitState, clickCell }) {
  const handleClick = () => {
    if (hitState === 'none') {
      clickCell(row, col);
    }
  };

  return (
    <div
      key={'cel' + row + '' + col}
      className={'cell ' + hitState}
      onClick={() => handleClick()}
    ></div>
  );
}
