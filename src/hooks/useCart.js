// useCart is just a convenient, safe bridge that lets any component grab cart data
// with one line of code instead of writing useContext(CartContext) every time.

import { useContext } from "react";
import { CartContext } from "../context/cart-context.js";

export function useCart() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used inside a <CartProvider>");
  }
  return context;
}
