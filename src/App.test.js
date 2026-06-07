import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('opens the new menu page when clicking the Mujeres Cafeteras submenu item', () => {
  render(<App />);

  fireEvent.click(screen.getAllByText(/proyectos/i)[0]);
  fireEvent.click(screen.getAllByText(/mujeres cafeteras/i)[0]);

  expect(screen.getByRole('heading', { name: /mujeres cafeteras/i })).toBeInTheDocument();
});
