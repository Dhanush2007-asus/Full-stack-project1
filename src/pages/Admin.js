import products from "../data/products";

function Admin() {
  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <p>Total Products: {products.length}</p>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - ${p.price}</li>
        ))}
      </ul>
      <p>(Extend with backend integration for full CRUD)</p>
    </div>
  );
}
export default Admin;
