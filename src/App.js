import React from "react";
import CardList from "./Components/CardList";
import { food } from "./food";

const App = () => {
  return (
    <div>
      <h1 className="site-header">Food Filter</h1>
      <CardList food={food} />
    </div>
  );
};

export default App;
