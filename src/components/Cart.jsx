// components/Cart.jsx
export default function Cart({ cart, onChangeQty, onRemove }) {
  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <ul>
      {cart.map((line) => (
        <li key={line.item.id}>
          {line.item.name} (RM{line.item.price.toFixed(2)}) x {line.qty}
          <button onClick={() => onChangeQty(line.item.id, -1)}>-</button>
          <button onClick={() => onChangeQty(line.item.id, 1)}>+</button>
          <button onClick={() => onRemove(line.item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
