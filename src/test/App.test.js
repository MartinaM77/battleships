import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Battleships title', () => {
  render(<App />);
  const element = screen.getByText(/Battleships/i);
  expect(element).toBeInTheDocument();
});
