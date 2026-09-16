import { useState } from "react";
import Menu from "./Menu";
import { dishes } from "./data";
import "./App.css";

function App() {
  const [category, setCategory] = useState("All");

  return (
    <div className="app">
      <h1>🍴 Addis Eats</h1>

      <p>Explore Ethiopian dishes</p>

      <div className="categories">
        <button onClick={() => setCategory("All")}>
          All
        </button>

        <button onClick={() => setCategory("Main")}>
          Main
        </button>

        <button onClick={() => setCategory("Breakfast")}>
          Breakfast
        </button>

        <button onClick={() => setCategory("Vegetarian")}>
          Vegetarian
        </button>
      </div>

      <h2>{category} Dishes</h2>

      <Menu dishes={dishes} category={category} />
    </div>
  );
}

export default App;