import { render } from '@testing-library/react';
import BattleGrid from '../BattleGrid';

test('renders 25 divs with cell className', () => {
  let gridCells = [];
  for (let row = 0; row < 5; row++) {
    let gridRow = [];
    for (let col = 0; col < 5; col++) {
      gridRow.push({ row: row, col: col, hitState: 'none' });
    }
    gridCells.push(gridRow);
  }

  const { container } = render(
    <BattleGrid gridCells={gridCells} clickCell={() => {}} />
  );
  expect(container.getElementsByClassName('cell').length).toBe(25);
});
