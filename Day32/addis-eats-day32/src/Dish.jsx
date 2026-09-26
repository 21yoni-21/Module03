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
    <>
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
        <p>Servings: {servings}</p>
      )}

      {isSpecial && (
        <span>⭐ Special</span>
      )}

      {isFasting && (
        <span>🌱 Fasting</span>
      )}

      {onAdd && (
        <button
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onAdd(dish);
          }}
        >
          Add to Cart
        </button>
      )}
    </>
  );
}

export default Dish;