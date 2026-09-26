import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Cart/CartContext";

function Cart() {
  const {
    items,
    total,
    removeItem,
    clearCart,
  } = useContext(CartContext);

  return (
    <section className="cart-page">
      <h1>Your Cart</h1>

      {items.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>

          <p>
            Add some Ethiopian dishes to your cart.
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

            <button onClick={clearCart}>
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