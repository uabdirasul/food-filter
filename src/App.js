import React from "react";
import CardList from "./Components/CardList";
import { food } from "./food";
import SearchBox from "./Components/SearchBox";

const App = () => {
  return (
    <div>
      <h1 className="site-header">Food Filter</h1>
      <SearchBox />
      <CardList food={food} />
    </div>
  );
};

export default App;
