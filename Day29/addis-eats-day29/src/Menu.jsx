
import { useEffect, useRef, useState } from "react";
import { loadDishes } from "./api";
import DishList from "./DishList";

function Menu() {
  const [category, setCategory] = useState("All");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchRef = useRef(null);

  const categories = [
    "All",
    "Traditional Stews & Wat",
    "Tibs & Grills",
    "Raw & Cured Delicacies / Kitfo",
    "Fasting & Vegan / Tsom",
    "Beverages & Tej",
  ];

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [loading]);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const data = await loadDishes(
          category,
          controller.signal
        );

        setDishes(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      controller.abort();
    };
  }, [category]);

  if (loading) {
    return (
      <section className="menu-section">
        <p className="status-message">
          Loading the menu...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="menu-section">
        <div className="error-message">
          <p>{error}</p>

          <button
            onClick={() => {
              setCategory((current) => current);
            }}
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="menu-section">
      <div className="menu-heading">
        <h1>Our Menu</h1>

        <p>
          Traditional Ethiopian dishes prepared with
          authentic ingredients.
        </p>
      </div>

      <div className="search-box">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search Addis Eats..."
        />
      </div>

      <div className="category-buttons">
        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item ? "active-category" : ""
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <DishList dishes={dishes} />
    </section>
  );
}

export default Menu;

