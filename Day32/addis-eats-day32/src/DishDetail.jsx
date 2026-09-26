import {
  Link,
  useParams,
} from "react-router-dom";

import { useFetch } from "./hooks/useFetch";

function DishDetail() {
  const { id } = useParams();

  const {
    data,
    loading,
    error,
  } = useFetch("All");

  if (loading) {
    return (
      <section className="detail-page">
        <p>Loading dish...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="detail-page">
        <p className="error">{error}</p>
      </section>
    );
  }

  const dishes = data ?? [];

  const dish = dishes.find(
    (item) => String(item.id) === String(id)
  );

  if (!dish) {
    return (
      <section className="detail-page">
        <h1>Dish Not Found</h1>

        <p>
          We could not find a dish with ID:
          {" "}
          {id}
        </p>

        <Link to="/menu">
          Back to Menu
        </Link>
      </section>
    );
  }

  return (
    <section className="detail-page">
      <Link to="/menu" className="back-link">
        ← Back to Menu
      </Link>

      <article className="dish-detail-card">
        <p className="detail-category">
          {dish.category}
        </p>

        <h1>{dish.nameEn}</h1>

        {dish.nameAm && (
          <h2>{dish.nameAm}</h2>
        )}

        <p className="detail-price">
          {dish.priceETB} ETB
        </p>

        {dish.description && (
          <p className="detail-description">
            {dish.description}
          </p>
        )}

        {dish.spiceLevel && (
          <p>
            <strong>Spice level:</strong>{" "}
            {dish.spiceLevel}
          </p>
        )}

        {dish.servings && (
          <p>
            <strong>Servings:</strong>{" "}
            {dish.servings}
          </p>
        )}

        {dish.isSpecial && (
          <p>⭐ Today's Special</p>
        )}

        {dish.isFasting && (
          <p>🌱 Fasting / Vegan</p>
        )}
      </article>
    </section>
  );
}

export default DishDetail;