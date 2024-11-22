import React from "react";
import Button from "./Button";
import "../index.css";

function Card({ title, buttonText }) {
  return (
    <div className="card">
      <h1 className="header">{title}</h1>
      <Button text={buttonText} />
    </div>
  );
}

export default Card;
