import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product List</h1>

      {products.map((product, index) => (
        <div key={index} style={{
          border: "1px solid gray",
          margin: "10px",
          padding: "10px",
          borderRadius: "10px"
        }}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Stock:</strong> {product.stock}</p>

          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              width="150"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default App;