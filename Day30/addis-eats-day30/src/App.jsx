import CartProvider from "./Cart/CartProvider";
import Header from "./Header";
import Menu from "./Menu";
import Checkout from "./Checkout";
import OrderForm from "./OrderForm";

function App() {
  return (
    <CartProvider>
      <Header />

      <main>
        <section>
          <h1>Addis Eats</h1>
          <p>Ethiopian food made easy</p>

          <Menu />
        </section>

        <Checkout />
      </main>

      <OrderForm />
    </CartProvider>
  );
}

export default App;