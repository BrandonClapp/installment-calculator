import styles from './ItemList.module.css';

interface Props {
  components?: JSX.Element | JSX.Element[];
}

export default function ItemList({ components }: Props) {
  return <div className={styles.items}>{components}</div>;
}
