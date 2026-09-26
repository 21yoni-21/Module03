import {
  useCallback,
  useMemo,
  useReducer,
} from "react";

import { CartContext } from "./CartContext";
import { cartReducer } from "./CartReducer";

function CartProvider({ children }) {
  const [items, dispatch] = useReducer(
    cartReducer,
    []
  );

  const addItem = useCallback((dish) => {
    dispatch({
      type: "add",
      dish,
    });
  }, []);

  const removeItem = useCallback((id) => {
    dispatch({
      type: "remove",
      id,
    });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({
      type: "clear",
    });
  }, []);

  const total = useMemo(() => {
    return items.reduce(
      (sum, item) =>
        sum + item.priceETB * item.quantity,
      0
    );
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      dispatch,
      addItem,
      removeItem,
      clearCart,
      total,
    }),
    [
      items,
      addItem,
      removeItem,
      clearCart,
      total,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;