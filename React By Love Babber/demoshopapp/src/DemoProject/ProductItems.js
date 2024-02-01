import React, { useState } from "react";

import "./ProductItems.css";
import ProductDate from "./ProductDate";
import Card from "./Card";

function ProductItem(props) {
  const [title, setTitle] = useState(props.title);

  return (
    <Card className="product-item">
      <ProductDate date={props.date} />
      <div className="product-item__description">
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
}

export default ProductItem;
