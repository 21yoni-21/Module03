import Header from "./Header";
import Dish from "./Dish";

const menu = [
  {
    id: 1,
    name: "Doro Wat",
    price: 240,
  },
  {
    id: 2,
    name: "Shiro",
    price: 120,
  },
  {
    id: 3,
    name: "Tibs",
    price: 280,
  },
  {
    id: 4,
    name: "Firfir",
    price: 150,
  },
  {
    id: 5,
    name: "Beyaynetu",
    price: 200,
  },
];

function App() {
  return (
    <div>
      <Header />

      <main>
        <h2>Our Menu</h2>

        <div>
          {menu.map((dish) => (
            <Dish
              key={dish.id}
              name={dish.name}
              price={dish.price}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;