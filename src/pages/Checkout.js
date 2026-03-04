import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { total, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <h3>Total Amount: ${total}</h3>
      <button onClick={handleCheckout}>Confirm Order</button>
    </div>
  );
}
export default Checkout;
