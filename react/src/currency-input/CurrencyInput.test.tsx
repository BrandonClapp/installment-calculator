import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CurrencyInput from './CurrencyInput';

test('Input should emit entered value', () => {
  let emittedValue = 0;
  render(
    <CurrencyInput currency="$" onSubmit={value => (emittedValue = value)} />
  );

  const input = screen.getByPlaceholderText('Total');
  userEvent.type(input, '100{enter}');
  expect(emittedValue).toEqual(100);
});
