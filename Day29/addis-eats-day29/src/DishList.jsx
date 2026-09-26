function DishList({ dishes }) {
  if (dishes.length === 0) {
    return <p className="empty-message">No dishes found.</p>;
  }

  return (
    <div className="dish-grid">
      {dishes.map((dish) => (
        <article className="dish-card" key={dish.id}>
          <div className="dish-card-header">
            <div>
              <h2>{dish.nameEn}</h2>
              <p className="amharic-name">{dish.nameAm}</p>
            </div>

            {dish.isSpecial && (
              <span className="special-badge">Special</span>
            )}
          </div>

          <p className="dish-category">{dish.category}</p>

          <p className="dish-description">
            {dish.description}
          </p>

          <div className="dish-details">
            <span>{dish.spiceLevel}</span>
            <span>{dish.servings}</span>
          </div>

          <div className="dish-footer">
            <strong>{dish.priceETB} ETB</strong>

            {dish.isFasting && (
              <span className="fasting-badge">Fasting</span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export default DishList;