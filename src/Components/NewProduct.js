import React from "react";
import "./NewProduct.css";
import ProductForm from "./ProductForm";

function NewProduct() {
  function saveProduct() {
    console.log("im inside new product");
  }

  return (
    <div className="new-product">
      <ProductForm onSaveProduct={saveProduct} />
    </div>
  );
}

export default NewProduct;
