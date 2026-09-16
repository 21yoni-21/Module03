import PropTypes from "prop-types";
import Card from "./Card";

function Dish({
  name,
  price,
  category,
  spicy = false,
  currency = "ETB",
}) {
  return (
    <Card>
      <h2>{name}</h2>

      <p>
        {price} {currency}
      </p>

      <p>Category: {category}</p>

      {spicy && <span>🌶️ Spicy</span>}
    </Card>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  spicy: PropTypes.bool,
  currency: PropTypes.string,
};

export default Dish;