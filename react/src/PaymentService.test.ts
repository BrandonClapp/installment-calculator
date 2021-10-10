import PaymentService from './PaymentService';

test('Phonic names are generated correctly', () => {
  expect(PaymentService.getPhonicName(1)).toEqual('First');
  expect(PaymentService.getPhonicName(2)).toEqual('Second');
  expect(PaymentService.getPhonicName(3)).toEqual('Third');
  expect(PaymentService.getPhonicName(4)).toEqual('Fourth');
});

test('Dates are calculated accurately', () => {
  const payments = PaymentService.calculatePayments(
    100,
    4,
    new Date('2021-01-01')
  );

  expect(payments.length).toEqual(4);
  expect(payments[0].date.toISOString()).toEqual('2021-01-01T00:00:00.000Z');
  expect(payments[1].date.toISOString()).toEqual('2021-01-15T00:00:00.000Z');
  expect(payments[2].date.toISOString()).toEqual('2021-01-29T00:00:00.000Z');
  expect(payments[3].date.toISOString()).toEqual('2021-02-12T00:00:00.000Z');
});

test('Payment amounts are calculated accurately for even amount', () => {
  const payments = PaymentService.calculatePayments(100, 4);

  expect(payments.length).toEqual(4);
  payments.forEach(p => expect(p.amount).toEqual(25));
});

test('Payment amounts are calculated accurately for floating amount', () => {
  const payments = PaymentService.calculatePayments(456.81, 4);

  expect(payments.length).toEqual(4);
  console.log(payments);

  // Assumption: 114.2025 => 114.21 : Round up to prevent fractional penny loss
  payments.forEach(p => expect(p.amount).toEqual(114.21));
});

test('Can generate more than 4 payments', () => {
  const payments = PaymentService.calculatePayments(100, 5);
  expect(payments.length).toEqual(5);
});
