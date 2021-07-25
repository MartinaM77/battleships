import { render, screen } from '@testing-library/react';
import BattleStatistics from '../BattleStatistics';

test('renders number of attempts', () => {
  const attempts = 10;
  render(<BattleStatistics attempts={attempts} />);
  const attemptsElement = screen.getByText('Attempts: 10');
  expect(attemptsElement).toBeInTheDocument();
});

test('renders success rate based on hits and attempts', () => {
  const hits = 2;
  const attempts = 10;
  render(<BattleStatistics hits={hits} attempts={attempts} />);
  const successElement = screen.getByText('Success rate: 20%');
  expect(successElement).toBeInTheDocument();
});

test('renders number of remaining ships', () => {
  const hits = 2;
  const attempts = 10;
  const remainingShipsCount = 1;
  render(
    <BattleStatistics
      remainingShipsCount={remainingShipsCount}
      hits={hits}
      attempts={attempts}
    />
  );
  const successElement = screen.getByText('Remaining ships: 1');
  expect(successElement).toBeInTheDocument();
});

test('does not render remaining number of ships if it is zero', () => {
  const hits = 2;
  const attempts = 10;
  const remainingShipsCount = 0;
  render(
    <BattleStatistics
      remainingShipsCount={remainingShipsCount}
      hits={hits}
      attempts={attempts}
    />
  );
  const successElement = screen.queryByText('Remaining ships: 0');
  expect(successElement).not.toBeInTheDocument();
});

test('renders Play again button if remaining number of ships is zero', () => {
  const hits = 2;
  const attempts = 10;
  const remainingShipsCount = 0;
  render(
    <BattleStatistics
      remainingShipsCount={remainingShipsCount}
      hits={hits}
      attempts={attempts}
    />
  );
  const successElement = screen.getByRole('button', { name: 'Play again?' });
  expect(successElement).toBeInTheDocument();
});
