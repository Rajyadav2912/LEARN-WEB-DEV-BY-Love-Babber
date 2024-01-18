import "./Item.css";

function Item(props) {
  const date = props.date;
  const month = props.month;
  const year = props.year;

  return (
    <div className="Item">
      <span className="span">{date}</span>
      <span className="span">{month}</span>
      <span className="span">{year}</span>
    </div>
  );
}

export default Item;
