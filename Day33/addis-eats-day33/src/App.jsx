
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Login from "./Login";
import NotFound from "./NotFound";
import OrderConfirmation from "./OrderConfirmation";

import AuthProvider from "./auth/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route
              path="menu"
              element={<Menu />}
            />

            <Route
              path="menu/:id"
              element={<DishDetail />}
            />

            <Route
              path="cart"
              element={<Cart />}
            />

            <Route
              path="login"
              element={<Login />}
            />

            <Route
              path="checkout"
              element={<Checkout />}
            />

            <Route
              path="orders/:id"
              element={<OrderConfirmation />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

