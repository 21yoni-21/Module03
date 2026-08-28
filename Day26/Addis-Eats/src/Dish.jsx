import { useState } from "react";

function Dish({ name, price }) {
  const [quantity, setQuantity] = useState(0);

  function handleAdd() {
    setQuantity(quantity + 1);
  }

  return (
    <div className="dish-card">
      <h3>{name}</h3>

      <p>Price: {price} ETB</p>

      <button onClick={handleAdd}>
        Add
      </button>

      <span> Quantity: {quantity}</span>
    </div>
  );
}

export default Dish;

