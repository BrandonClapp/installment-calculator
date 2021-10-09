import { useState, KeyboardEvent, ChangeEvent } from 'react';
import styles from './CurrencyInput.module.css';

export interface Props {
  currency: string;
  onSubmit: (total: number) => void;
}

export default function CurrencyInput({ currency, onSubmit }: Props) {
  const [value, setValue] = useState(0);

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSubmit(value);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(event.target.valueAsNumber)) {
      setValue(event.target.valueAsNumber);
    }
  };

  return (
    <div className={styles.controls}>
      <div className={styles.currency}>{currency}</div>
      <input
        onKeyUp={handleKeyUp}
        onChange={handleChange}
        className={styles.total}
        type="number"
        min="1"
        step="any"
        placeholder="Total"
      />
    </div>
  );
}
