import React, { useState } from "react";

import ProductDate from "./ProductDate";
import Card from "./Card";
import "./ProductItem.css";

const ProductItem = (props) => {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("Rin power");
  }
  return (
    <div className="main">
      <Card className="product-item card">
        <div className="product-item_description">
          <ProductDate date={props.date} />
          <div>
            <h2>{title}</h2>
            <button className="btn" onClick={clickHandler}>
              Add to cart
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductItem;
