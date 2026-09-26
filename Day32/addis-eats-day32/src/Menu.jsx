import {
  useEffect,
  useMemo,
  useRef,
} from "react";

import { useSearchParams } from "react-router-dom";

import { useCartStore } from "./Cart/CartStore";
import { useFetch } from "./hooks/useFetch";

import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

function Menu() {
  const [params, setParams] =
    useSearchParams();

  const category =
    params.get("category") ?? "All";

  const searchRef = useRef(null);

  const { data, loading, error } =
    useFetch(category);

  const addItem = useCartStore(
    (state) => state.addItem
  );

  useEffect(() => {
    document.title = "Addis Eats - Menu";
  }, []);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [loading]);

  function chooseCategory(category) {
    if (category === "All") {
      setParams({});
    } else {
      setParams({
        category,
      });
    }
  }

  const dishes = data ?? [];

  const shown = useMemo(() => {
    return [...dishes].sort(
      (a, b) =>
        a.priceETB - b.priceETB
    );
  }, [dishes]);

  if (loading) {
    return (
      <section className="menu-section">
        <h1>Our Menu</h1>
        <p>Loading the menu...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="menu-section">
        <h1>Our Menu</h1>
        <p className="error">
          {error}
        </p>
      </section>
    );
  }

  return (
    <section className="menu-section">
      <h1>Our Menu</h1>

      <p>
        Choose from our Ethiopian dishes.
      </p>

      <input
        ref={searchRef}
        type="text"
        placeholder="Search dishes..."
        className="search-input"
      />

      <CategoryBar
        selected={category}
        onSelect={chooseCategory}
      />

      <DishList
        dishes={shown}
        onAdd={addItem}
      />
    </section>
  );
}

export default Menu;