
import Dish from "./Dish";
import menu from "./data";

function Menu() {
  // Static category for today's exercise
  const selectedCategory = "Main";

  const filteredMenu = menu.filter(
    (dish) => dish.category === selectedCategory
  );

  return (
    <section className="menu">
      <h2>{selectedCategory} Dishes</h2>

      {filteredMenu.length === 0 ? (
        <p>No dishes found in this category.</p>
      ) : (
        <div className="dish-grid">
          {filteredMenu.map((dish) => (
            <Dish
              key={dish.id}
              name={dish.name}
              price={dish.price}
              spicy={dish.spicy}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Menu;
