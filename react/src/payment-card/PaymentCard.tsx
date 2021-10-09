import Card from '../card/Card';
import styles from './PaymentCard.module.css';

export interface Props {
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
}: Props) {
  return (
    <Card>
      <div className={styles.details}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      <div className={styles.amount}>
        {currency}
        {amount.toFixed(2)}
      </div>
    </Card>
  );
}
