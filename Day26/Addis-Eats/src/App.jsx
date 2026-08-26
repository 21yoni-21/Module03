import Dish from "./Dish";
import "./index.css";

function Header() {
  return (
    <header>
      <h1>🍽️ Addis Eats</h1>
      <p>Authentic Ethiopian Food</p>
    </header>
  );
}

function App() {
  const dishes = [
    { id: 1, name: "Doro Wat", price: 240 },
    { id: 2, name: "Shiro", price: 120 },
    { id: 3, name: "Kitfo", price: 350 },
    { id: 4, name: "Tibs", price: 280 },
    { id: 5, name: "Firfir", price: 150 },
    { id: 6, name: "Beyaynetu", price: 200 },
  ];

  return (
    <>
      <Header />

      <main>
        <h2>Our Menu</h2>

        <section className="menu">
          {dishes.map((dish) => (
            <Dish
              key={dish.id}
              name={dish.name}
              price={dish.price}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;