import { useCartStore } from "./Cart/CartStore";

function CartBadge() {
  const items = useCartStore(
    (state) => state.items
  );

  const count = items.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <div className="cart-badge">
      🛒 Cart: {count}
    </div>
  );
}

export default CartBadge;