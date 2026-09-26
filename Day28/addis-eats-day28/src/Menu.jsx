import { useState } from "react";
import PropTypes from "prop-types";
import { dishes } from "./data";
import CategoryBar from "./CategoryBar";
import Dish from "./Dish";

function Menu() {
  const [category, setCategory] = useState("All");
  const [total, setTotal] = useState(0);

  const shownDishes =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  function addToOrder(price) {
    setTotal((currentTotal) => currentTotal + price);
  }

  return (
    <section className="menu-section">
      <div className="menu-header">
        <div>
          <h2>{category} Dishes</h2>
          <p>Choose your favorite Ethiopian dish.</p>
        </div>

        <div className="total">
          Order Total: <strong>{total} ETB</strong>
        </div>
      </div>

      <CategoryBar
        selected={category}
        onSelect={setCategory}
      />

      {shownDishes.length === 0 ? (
        <p>No {category} dishes found.</p>
      ) : (
        <div className="menu">
          {shownDishes.map((dish) => (
            <Dish
              key={dish.id}
              {...dish}
              onAdd={addToOrder}
            />
          ))}
        </div>
      )}
    </section>
  );
}

Menu.propTypes = {
  dishes: PropTypes.array
};

export default Menu;