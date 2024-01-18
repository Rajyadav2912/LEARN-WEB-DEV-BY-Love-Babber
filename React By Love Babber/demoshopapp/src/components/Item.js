import "./Item.css";

function Item(props) {
  const Name = props.Name;
  return <div className="Item">{Name}</div>;
}

export default Item;
