import {
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { CartContext } from "./Cart/CartContext";
import { useFetch } from "./hooks/useFetch";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

function Menu() {
  const [category, setCategory] = useState("All");
  const searchRef = useRef(null);

  const {
    data,
    loading,
    error,
  } = useFetch(category);

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    document.title = "Addis Eats";
  }, []);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [loading]);

  const dishes = data ?? [];

  const shown = useMemo(() => {
    return [...dishes].sort(
      (a, b) => a.priceETB - b.priceETB
    );
  }, [dishes]);

  if (loading) {
    return (
      <section className="menu-section">
        <h2>Our Menu</h2>
        <p>Loading the menu...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="menu-section">
        <h2>Our Menu</h2>
        <p className="error">
          {error}
        </p>
      </section>
    );
  }

  return (
    <section className="menu-section">
      <h2>Our Menu</h2>

      <input
        ref={searchRef}
        type="text"
        placeholder="Search dishes..."
        className="search-input"
      />

      <CategoryBar
        selected={category}
        onSelect={setCategory}
      />

      <DishList
        dishes={shown}
        onAdd={addItem}
      />
    </section>
  );
}

export default Menu;