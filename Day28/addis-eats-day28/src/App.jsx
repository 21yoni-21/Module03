import Menu from "./Menu";
import OrderForm from "./OrderForm";
import { dishes } from "./data";

function App() {
  return (
    <>
      <h1>🍽️ Addis Eats</h1>

      <Menu dishes={dishes} />

      <OrderForm />
    </>
  );
}

export default App;