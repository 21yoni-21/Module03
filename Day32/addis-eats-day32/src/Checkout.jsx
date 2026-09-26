import { Link } from "react-router-dom";

import { useCartStore } from "./Cart/CartStore";
import { useAuth } from "./auth/UseAuth";

function Checkout() {
  const items = useCartStore(
    (state) => state.items
  );

  const clear = useCartStore(
    (state) => state.clear
  );

  const { user, logout } = useAuth();

  const total = items.reduce(
    (sum, item) =>
      sum +
      item.priceETB * item.quantity,
    0
  );

  function placeOrder() {
    alert(
      "Order submitted successfully!"
    );

    clear();
  }

  return (
    <section className="checkout-page">
      <div className="checkout-card">
        <h1>Checkout</h1>

        <p>
          Signed in as: {user?.phone}
        </p>

        <button onClick={logout}>
          Sign Out
        </button>

        <h2>Order Summary</h2>

        {items.length === 0 ? (
          <>
            <p>Your cart is empty.</p>

            <Link to="/menu">
              Go to Menu
            </Link>
          </>
        ) : (
          <>
            {items.map((item) => (
              <div
                key={item.id}
                className="checkout-item"
              >
                <span>
                  {item.nameEn} ×{" "}
                  {item.quantity}
                </span>

                <strong>
                  {item.priceETB *
                    item.quantity}{" "}
                  ETB
                </strong>
              </div>
            ))}

            <h2>
              Total: {total} ETB
            </h2>

            <button
              className="place-order-button"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default Checkout;