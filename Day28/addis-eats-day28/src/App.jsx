import Menu from "./Menu";
import OrderForm from "./OrderForm";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>🍴 Addis Eats</h1>

      <p>Explore Ethiopian dishes</p>

      <Menu />

      <OrderForm />
    </div>
  );
}

export default App;