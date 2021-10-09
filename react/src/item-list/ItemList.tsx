import "./ItemList.css";

interface Props {
  components: JSX.Element[];
}

export default function ItemList({ components }: Props) {
  return <div className="items">{components}</div>;
}
