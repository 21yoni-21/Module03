import { useState } from "react";
import Modal from "./ui/Modal";

function Dish({
  nameEn,
  nameAm,
  category,
  priceETB,
  spiceLevel,
  description,
  servings,
  isSpecial,
  isFasting,
  onAdd,
}) {
  const [open, setOpen] = useState(false);

  const dish = {
    nameEn,
    nameAm,
    category,
    priceETB,
    spiceLevel,
    description,
    servings,
    isSpecial,
    isFasting,
  };

  return (
    <article className="dish-card">
      <h3>{nameEn}</h3>

      {nameAm && <p>{nameAm}</p>}

      <p>{category}</p>

      <p className="price">
        {priceETB} ETB
      </p>

      {spiceLevel && (
        <p>Spice: {spiceLevel}</p>
      )}

      {description && (
        <p>{description}</p>
      )}

      {servings && (
        <p>
          Servings: {servings}
        </p>
      )}

      {isSpecial && (
        <span>⭐ Special</span>
      )}

      {isFasting && (
        <span>🌱 Fasting</span>
      )}

      <div className="dish-actions">
        {onAdd && (
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onAdd(dish);
            }}
          >
            Add to Cart
          </button>
        )}

        <button
          type="button"
          onClick={() => setOpen(true)}
        >
          View Details
        </button>
      </div>

      {open && (
        <Modal
          title={nameEn}
          onClose={() => setOpen(false)}
        >
          {nameAm && (
            <p>{nameAm}</p>
          )}

          <p>
            Category: {category}
          </p>

          <p>
            Price: {priceETB} ETB
          </p>

          {spiceLevel && (
            <p>
              Spice: {spiceLevel}
            </p>
          )}

          {description && (
            <p>{description}</p>
          )}

          {servings && (
            <p>
              Servings: {servings}
            </p>
          )}

          {isSpecial && (
            <p>⭐ Special</p>
          )}

          {isFasting && (
            <p>🌱 Fasting</p>
          )}
        </Modal>
      )}
    </article>
  );
}

export default Dish;