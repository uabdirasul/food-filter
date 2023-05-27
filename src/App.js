import React from "react";
import CardList from "./Components/CardList";
import { food } from "./food";
import SearchBox from "./Components/SearchBox";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchField: "",
      food: food,
    };
  }

  searchFood = (e) => {
    const { value } = e.target;
    this.setState({
      searchField: value,
    });
    console.log(value);
  };

  render() {
    const filteredFood = this.state.food.filter((food) => {
      return food.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div>
        <h1 className="site-header">Food Filter</h1>
        <SearchBox searchFood={this.searchFood} />
        <CardList food={filteredFood} />
      </div>
    );
  }
}

export default App;
