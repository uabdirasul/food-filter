import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" className="card-img" />
      <h3 className="card-header">{props.name}</h3>
      <p className="card-price">{props.price}</p>
    </div>
  );
};

export default Card;
