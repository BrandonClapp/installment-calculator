import styles from './ItemList.module.css';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export default function ItemList({ children }: Props) {
  return <div className={styles.items}>{children}</div>;
}
