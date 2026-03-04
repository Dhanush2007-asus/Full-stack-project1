import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container grid">
      {products.map(product => (
        <div key={product.id} className="card">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
export default Products;
