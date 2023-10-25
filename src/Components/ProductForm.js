import { useState } from "react";
import "./ProductForm.css";
function ProductForm() {
  // state hook
  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");
  //
  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault(); //to prevent disablity
    const productData = {
      title: newTitle,
      date: newDate,
    };
    console.log(productData);
    setTitle("");
    setDate("");
  }

  return (
    <div className="form font-semibold ">
      <form onSubmit={submitHandler}>
        <div className="new-product_title">
          <label>Title: </label>
          <input
            type="text"
            value={newTitle} //to make empty the input field
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-product_date">
          <label>Date: </label>
          <input
            value={newDate} //to make empty the input field
            type="date"
            min="2023-10-23"
            max="2023-12-12"
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-product_button">
          <button className="button bg-emerald-100 font-semibold" type="submit">
            Add product
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
