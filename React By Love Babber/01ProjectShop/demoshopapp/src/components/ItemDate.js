import "./ItemDate.css";

function ItemDate(props) {
  const date = props.date;
  const month = props.month;
  const year = props.year;

  return (
    <div className="ItemDate">
      <span className="span">{date}</span>
      <span className="span">{month}</span>
      <span className="span">{year}</span>
    </div>
  );
}

export default ItemDate;
