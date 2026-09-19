
function Card({ dish }) {
  return (
    <div>
      <h3>{dish.name}</h3>
      <p>{dish.price} ETB</p>

      {dish.spicy && <p>🌶️ Spicy</p>}

      <button>Add</button>

      <p>Quantity: 0</p>
    </div>
  );
}

export default Card;

