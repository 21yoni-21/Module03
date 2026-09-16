import Header from "./Header";
import Dish from "./Dish";
import Footer from "./Footer";

const menu = [
  {
    id: 1,
    name: "Doro Wat",
    price: 240,
    description: "Spicy Ethiopian chicken stew with berbere.",
  },
  {
    id: 2,
    name: "Shiro",
    price: 120,
    description: "Traditional chickpea stew served with injera.",
  },
  {
    id: 3,
    name: "Tibs",
    price: 280,
    description: "Sautéed beef with onions, peppers and spices.",
  },
  {
    id: 4,
    name: "Firfir",
    price: 150,
    description: "Pieces of injera mixed with spicy sauce.",
  },
  {
    id: 5,
    name: "Beyaynetu",
    price: 200,
    description: "A selection of vegetarian Ethiopian dishes.",
  },
];

function App() {
  return (
    <>
      <Header />

      <main>
        <h2>Our Menu</h2>

        <section className="menu">
          {menu.map((dish) => (
            <Dish
              key={dish.id}
              name={dish.name}
              price={dish.price}
              description={dish.description}
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;