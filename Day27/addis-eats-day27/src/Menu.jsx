import PropTypes from "prop-types";
import Dish from "./Dish";

function Menu({ dishes, category }) {
  const shownDishes =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  if (shownDishes.length === 0) {
    return <p>No {category} dishes found.</p>;
  }

  return (
    <div className="menu">
      {shownDishes.map((dish) => (
        <Dish key={dish.id} {...dish} />
      ))}
    </div>
  );
}

Menu.propTypes = {
  dishes: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};

export default Menu;