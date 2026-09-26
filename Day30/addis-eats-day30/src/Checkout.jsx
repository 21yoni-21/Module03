import { useContext } from "react";
import { CartContext } from "./Cart/CartContext";

function Checkout() {
  const {
    items,
    total,
    removeItem,
    clearCart,
  } = useContext(CartContext);

  return (
    <aside className="checkout">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div>
                  <strong>{item.nameEn}</strong>
                  <p>
                    {item.priceETB} ETB × {item.quantity}
                  </p>
                </div>

                <div>
                  <p>
                    {item.priceETB * item.quantity} ETB
                  </p>

                  <button onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3>Total: {total} ETB</h3>

          <button onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </aside>
  );
}

export default Checkout;