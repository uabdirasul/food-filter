import React from "react";
import Card from "./Card";

const CardList = ({ food }) => {
  return (
    <div className="card-list">
      {food.map((food, index) => {
        return (
          <Card
            key={index}
            img={food.img}
            name={food.name}
            price={food.price}
          />
        );
      })}
    </div>
  );
};

export default CardList;
