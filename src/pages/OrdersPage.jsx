import { Link } from "react-router";
import { useCart } from "../hooks/useCart.js";

export default function OrdersPage() {
  const { orders } = useCart();

  if (orders.length === 0) {
    return (
      <p className="muted">
        No orders yet. <Link to="/">Browse vendors</Link>
      </p>
    );
  }

  return (
    <section>
      <h2 className="section-title">My Orders</h2>
      <ul className="order-list">
        {orders.map((order) => (
          <li key={order.id} className="card">
            <h3>Order for {order.name}</h3>
            <p className="muted">
              {order.mahallah} · Pickup {order.pickupTime}
            </p>
            <ul>
              {order.lines.map((line) => (
                <li key={line.item.id}>
                  {line.qty} × {line.item.name}
                </li>
              ))}
            </ul>
            <p className="price">Total: RM {order.total.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
