import { Link } from "react-router-dom";
import Dish from "./Dish";

function DishList({ dishes, onAdd }) {
  if (!dishes || dishes.length === 0) {
    return <p>No dishes found.</p>;
  }

  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <article
          key={dish.id}
          className="dish-card"
        >
          <Link
            to={`/menu/${dish.id}`}
            className="dish-link"
          >
            <h3>{dish.nameEn}</h3>

            {dish.nameAm && (
              <p>{dish.nameAm}</p>
            )}

            <p>{dish.category}</p>

            <p className="price">
              {dish.priceETB} ETB
            </p>

            {dish.description && (
              <p>{dish.description}</p>
            )}
          </Link>

          <button
            onClick={() => onAdd(dish)}
          >
            Add to Cart
          </button>
        </article>
      ))}
    </div>
  );
}

export default DishList;