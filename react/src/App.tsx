import './App.css';
import { useState } from 'react';
// import Card from './card/Card';
import CurrencyInput from './currency-input/CurrencyInput';
import ItemList from './item-list/ItemList';
import PaymentCard, {
  Props as PaymentCardProps,
} from './payment-card/PaymentCard';
import PaymentService, { Currency } from './PaymentService';

// TODO: Write unit tests for date calculations.
// TODO: Write unit tests for payment calculations.
// TODO: Write unit tests to ensure that payment cards have the correct dates and amounts shown.
// TODO: Round up fractional pennies on payment calculations.
// TODO: Add theme toggle

function App() {
  const [payments, setPayments] = useState<PaymentCardProps[]>([]);

  const currency = Currency.USD;

  const calcPayments = (total: number) => {
    return PaymentService.calculatePayments(total, 4).map(payment => {
      // TODO: We could make a date locale provider to return date formats based on currency type.
      return {
        title: payment.date.toLocaleString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        }),
        subtitle: `${PaymentService.getPhonicName(payment.sequence)} payment`,
        currency: currency,
        amount: payment.amount,
      };
    });
  };

  const handleTotalChange = (total: number) => setPayments(calcPayments(total));

  const listComponents = payments.map(payment => (
    <PaymentCard
      key={payment.title}
      title={payment.title}
      subtitle={payment.subtitle}
      currency={currency}
      amount={payment.amount}
    ></PaymentCard>
  ));

  // Item list can render any kind of element.
  // listComponents.push(
  //   <Card key="summary">
  //     <div>Summary: Whatever</div>
  //   </Card>
  // );

  return (
    <div className="container">
      <div className="calculator">
        <CurrencyInput
          onSubmit={(value: number) => handleTotalChange(value)}
          currency={currency}
        />
        <div className="payments">
          <ItemList components={listComponents} />
        </div>
      </div>
    </div>
  );
}

export default App;
