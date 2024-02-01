import "./Products.css";

import Card from "./Card";
import ProductItem from "./ProductItem";

function Products(props) {
  const Products = props;
  return (
    <Card className="products">
      <ProductItem></ProductItem>
    </Card>
  );
}

export default Products;
