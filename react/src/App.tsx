import React from "react";
import "./App.css";
import Controls from "./controls/Controls";
import ItemList from "./item-list/ItemList";
import PaymentCard from "./payment-card/PaymentCard";

function App() {
  const payments = [
    { title: "First", subtitle: "First Payment", amount: 24.99 },
    { title: "Second", subtitle: "Second Payment", amount: 24.99 },
    { title: "Third", subtitle: "Third Payment", amount: 24.99 },
    { title: "Fourth", subtitle: "Fourth Payment", amount: 24.99 },
  ];

  const currency = "$";

  const listComponents = payments.map((payment, index) => (
    <PaymentCard
      key={index}
      title={payment.title}
      subtitle={payment.subtitle}
      currency={currency}
      amount={payment.amount}
    ></PaymentCard>
  ));

  listComponents.push(
    <div style={{ backgroundColor: "#f00" }} key="hithere">
      Summary:{" "}
    </div>
  );

  return (
    <div className="container">
      <div className="calculator">
        <Controls currency={currency} />
        <ItemList components={listComponents} />
      </div>
    </div>
  );
}

export default App;
