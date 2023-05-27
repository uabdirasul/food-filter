import React, { Component } from "react";
import Card from "./Card";
import { food } from "../food";

class CardList extends Component {
  render() {
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
  }
}

export default CardList;
