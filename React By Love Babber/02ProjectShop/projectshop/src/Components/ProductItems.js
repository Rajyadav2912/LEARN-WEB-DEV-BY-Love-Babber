import React, { useState } from "react";

import ProductDate from "./ProductDate";
import Card from "./Card";
import "./ProductItems.css";

const ProductItems = (props) => {
  const [title, setTitle] = useState(props.title);
//   const amount = props.amount;

  function clickHandler() {
    //title = "Popcorn";
    setTitle("Popcorn");
    console.log("button clicked");
  }

  return (
    <Card className="product-item">
      <ProductDate date={props.date} />
      <div className="product-item__description">
        <h2>{title}</h2>
      </div>
      {/* <p>{amount}</p> */}
      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
};

export default ProductItems;
