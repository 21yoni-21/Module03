import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function Dish({
  name,
  price,
  category,
  spicy = false,
  currency = "ETB",
  onAdd
}) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((currentCount) => currentCount + 1);
    onAdd(price);
  }

  return (
    <Card>
      <h2>{name}</h2>

      <p>
        {price} {currency}
      </p>

      <p>Category: {category}</p>

      {spicy && <span>🌶️ Spicy</span>}

      <div className="dish-actions">
        <button onClick={handleAdd}>
          Add
        </button>

        <span>Quantity: {count}</span>
      </div>
    </Card>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  spicy: PropTypes.bool,
  currency: PropTypes.string,
  onAdd: PropTypes.func.isRequired
};

export default Dish;