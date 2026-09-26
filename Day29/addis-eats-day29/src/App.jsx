import Menu from "./Menu";
import OrderForm from "./OrderForm";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <h1>🍴 Addis Eats</h1>

      <p>Explore Ethiopian dishes</p>

      <main>
        <Menu />
        <OrderForm />
      </main>
    </div>
  );
}

export default App;