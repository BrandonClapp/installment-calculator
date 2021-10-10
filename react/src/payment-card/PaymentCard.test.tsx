import { render, screen } from '@testing-library/react';
import PaymentCard from './PaymentCard';

test('PaymentCard renders correct data', async () => {
  render(
    <PaymentCard
      title="The title"
      subtitle="The subtitle"
      currency="$"
      amount={12.5544}
    />
  );

  expect(await screen.findByText('$12.55')).toBeInTheDocument();
  expect(await screen.findByText('The title')).toBeInTheDocument();
  expect(await screen.findByText('The subtitle')).toBeInTheDocument();
});

test('PaymentCard correctly renders alternate currency', async () => {
  render(
    <PaymentCard
      title="The title"
      subtitle="The subtitle"
      currency="€"
      amount={12.5544}
    />
  );

  expect(await screen.findByText('€12.55')).toBeInTheDocument();
});
