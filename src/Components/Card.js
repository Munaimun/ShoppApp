import React from "react";
import "./Card.css"; // Make sure to have the corresponding CSS file

const Card = (props) => {
  const classes = "card" + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
