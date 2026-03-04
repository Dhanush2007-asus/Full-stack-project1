import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price}
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <Link to="/checkout"><button>Proceed to Checkout</button></Link>
    </div>
  );
}
export default Cart;
