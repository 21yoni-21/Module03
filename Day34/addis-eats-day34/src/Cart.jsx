import { Link } from "react-router-dom";
import { useCartStore } from "./Cart/CartStore";

function Cart() {
  const items = useCartStore(
    (state) => state.items
  );

  const removeItem = useCartStore(
    (state) => state.removeItem
  );

  const clear = useCartStore(
    (state) => state.clear
  );

  const total = items.reduce(
    (sum, item) =>
      sum +
      item.priceETB * item.quantity,
    0
  );

  return (
    <section className="cart-page">
      <h1>Your Cart</h1>

      {items.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>

          <p>
            Add some Ethiopian dishes
            to your cart.
          </p>

          <Link
            to="/menu"
            className="hero-button"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-page-items">
            {items.map((item) => (
              <div
                className="cart-page-item"
                key={item.id}
              >
                <div>
                  <h3>{item.nameEn}</h3>

                  <p>
                    {item.priceETB} ETB ×{" "}
                    {item.quantity}
                  </p>
                </div>

                <div>
                  <strong>
                    {item.priceETB *
                      item.quantity}{" "}
                    ETB
                  </strong>

                  <button
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>
              Total: {total} ETB
            </h2>

            <button onClick={clear}>
              Clear Cart
            </button>

            <Link
              to="/checkout"
              className="checkout-button"
            >
              Go to Checkout
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;