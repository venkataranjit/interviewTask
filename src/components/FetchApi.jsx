import React, { useEffect, useState } from "react";

const url = "https://fakestoreapi.com/products";

const FetchApi = () => {
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Data Not Fetched");
      }
      const response = await res.json();
      setProducts(response);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h2>Fetch Api</h2>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>{p.category}</td>
              <td>
                <img src={p.image} height={"48px"} width="48px" />
              </td>
              <td>{p.rating.rate}</td>
              <td>{p.rating.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FetchApi;
