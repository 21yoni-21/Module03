import { useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

function Menu({ dishes }) {
  const [category, setCategory] = useState("All");
  const [total, setTotal] = useState(0);

  const shown =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  function addToOrder(price) {
    setTotal(total + price);
  }

  return (
    <section>
      <h2>Our Menu</h2>

      <CategoryBar
        selected={category}
        onSelect={setCategory}
      />

      <DishList
        dishes={shown}
        onAdd={addToOrder}
      />

      <h2>Total: {total} ETB</h2>
    </section>
  );
}

export default Menu;