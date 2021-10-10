import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('CurrencyInput renders payments', async () => {
  render(<App />);

  const currencyInput = screen.getByPlaceholderText('Total');
  userEvent.type(currencyInput, '94{enter}');

  expect((await screen.findAllByText('$23.50')).length).toEqual(4);

  // Clear the input then try another value.
  userEvent.clear(currencyInput);
  userEvent.type(currencyInput, '125{enter}');

  expect((await screen.findAllByText('$31.25')).length).toEqual(4);
});
