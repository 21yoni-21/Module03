function Dish({
  id,
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
  const dish = {
    id,
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

      {nameAm && (
        <p>{nameAm}</p>
      )}

      <p>{category}</p>

      <p className="price">
        {priceETB} ETB
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
        <span>⭐ Special</span>
      )}

      {isFasting && (
        <span>🌱 Fasting</span>
      )}

      <button
        onClick={() => onAdd(dish)}
      >
        Add to Cart
      </button>
    </article>
  );
}

export default Dish;