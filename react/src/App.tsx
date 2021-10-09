import { useState } from 'react';
import './App.css';
import Card from './card/Card';
import CurrencyInput from './currency-input/CurrencyInput';
import ItemList from './item-list/ItemList';
import PaymentCard from './payment-card/PaymentCard';
// import PaymentService from './PaymentService';

// TODO: Write unit tests for date calculations.
// TODO: Write unit tests for payment calculations.
// TODO: Write unit tests to ensure that payment cards have the correct dates and amounts shown.
// TODO: Round up fractional pennies on payment calculations.

function App() {
  const [total, setTotal] = useState(0);

  const payments = [
    { title: 'Oct 09, 2021', subtitle: 'First Payment', amount: 24.99 },
    { title: 'Oct 23, 2021', subtitle: 'Second Payment', amount: 24.99 },
    { title: 'Nov 06, 2021', subtitle: 'Third Payment', amount: 24.99 },
    { title: 'Nov 20, 2021', subtitle: 'Fourth Payment', amount: 24.99 },
  ];

  // const payments = PaymentService.calculatePaymentDates(4);

  const currency = '$';

  const listComponents = payments.map(payment => (
    <PaymentCard
      key={payment.title}
      title={payment.title}
      subtitle={payment.subtitle}
      currency={currency}
      amount={payment.amount}
    ></PaymentCard>
  ));

  // listComponents.push(
  //   <Card key="summary">
  //     <div>Summary: Whatever</div>
  //   </Card>
  // );

  return (
    <div className="container">
      <div className="calculator">
        Total: {total}
        <CurrencyInput
          onSubmit={(value: number) => setTotal(value)}
          currency={currency}
        />
        <ItemList components={listComponents} />
      </div>
    </div>
  );
}

export default App;
