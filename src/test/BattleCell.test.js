import { render } from '@testing-library/react';
import BattleCell from '../BattleCell';

test('className of the cell contains content of props state', () => {
  const { container } = render(<BattleCell hitState={'testState'} />);
  const cell = container.getElementsByClassName('cell');
  expect(cell.length).toBe(1);
  expect(cell[0].className).toBe('cell testState');
});
