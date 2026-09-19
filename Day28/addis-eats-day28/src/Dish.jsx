import { useState } from "react";

function Dish({ dish, onAdd }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
    onAdd(dish.price);
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "15px 0",
        borderRadius: "8px",
      }}
    >
      <h3>{dish.name}</h3>

      <p>{dish.price} ETB</p>

      {dish.spicy && <p>🌶️ Spicy</p>}

      <button onClick={handleAdd}>
        Add
      </button>

      <p>Quantity: {count}</p>
    </div>
  );
}

export default Dish;