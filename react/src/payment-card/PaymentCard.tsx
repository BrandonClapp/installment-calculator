import { Card } from "../card/Card";
import "./PaymentCard.css";

export interface PaymentCardInput {
  title: string;
  subtitle: string;
  currency: string;
  amount: number;
}

export default function PaymentCard({
  title,
  subtitle,
  currency,
  amount,
}: PaymentCardInput) {
  return (
    <Card>
      <div className="details">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      <div className="amount">
        {currency}
        {amount}
      </div>
    </Card>
  );
}
