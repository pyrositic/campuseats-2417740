import { Link, useNavigate } from "react-router";
import CheckoutForm from "../components/CheckoutForm.jsx";
import { useCart } from "../hooks/useCart.js";

export default function CartPage() {
  const { cart, total, changeQty, removeFromCart, placeOrder } = useCart(); //only call what function u want
  const navigate = useNavigate(); //navigate is a function that allows you to programmatically navigate to a different route

  if (cart.length === 0) {
    return (
      <p className="muted">
        Your cart is empty.{" "}
        <Link to="/">Pick something from a menu first.</Link> 
      </p>
    ); //goes to homepage -> /
  }

  //checkout form call this function when user submit
  function handlePlaceOrder(details) {
    placeOrder(details);
    navigate("/orders");
  } //go here when action is done. link to need user action, this one dont

  return (
    <div className="cart-layout">
      <div className="card">
        <ul className="cart-list">
          {cart.map((line) => (
            <li key={line.item.id} className="cart-line">
              <div>
                <p className="cart-name">{line.item.name}</p>
                <p className="muted">RM {line.item.price.toFixed(2)} each</p>
              </div>
              <div className="qty">
                <button
                  type="button"
                  onClick={() => changeQty(line.item.id, -1)}
                >
                  −
                </button>
                <span>{line.qty}</span>
                <button
                  type="button"
                  onClick={() => changeQty(line.item.id, 1)}
                >
                  +
                </button>
              </div>
              <p className="line-total">
                RM {(line.item.price * line.qty).toFixed(2)}
              </p>
              <button
                type="button"
                className="link danger"
                onClick={() => removeFromCart(line.item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p className="cart-total">Total: RM {total.toFixed(2)}</p>
      </div>
      <CheckoutForm onPlaceOrder={handlePlaceOrder} />
    </div>
  ); //onplaceorder is called handleplaceorder 
}
