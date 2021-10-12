import styles from './Card.module.css';

export interface Props {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

export default function Card({ className, children }: Props) {
  return <div className={[styles.card, className].join(' ')}>{children}</div>;
}
