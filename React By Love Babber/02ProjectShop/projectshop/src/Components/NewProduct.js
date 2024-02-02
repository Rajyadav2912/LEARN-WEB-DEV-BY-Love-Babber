import React from "react";

import "./NewProduct.css";
import ProductForm from "./ProductForm";

function NewProduct(props) {
  function saveProduct(product) {
    console.log("I'm inside a new-Product save");
    console.log(product);

    //calling parent function
    props.createNewProduct(product);
  }

  return (
    <div className="new-product">
      <ProductForm onSaveProduct={saveProduct} />
    </div>
  );
}

export default NewProduct;
