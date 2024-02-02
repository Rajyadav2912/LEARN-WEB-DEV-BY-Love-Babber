import React from "react";

import "./Products.css";
import Card from "./Card";
import ProductItems from "./ProductItems";

const Product = (props) => {
  return (
    <Card className="products">
      <ProductItems
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />

      <ProductItems
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />

      {/* <ProductItems
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      /> */}

      {/* <ProductItems
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
};

export default Product;
