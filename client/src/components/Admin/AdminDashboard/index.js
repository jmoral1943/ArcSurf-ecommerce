import React, { useState, useEffect } from "react";

import httpClient from "../../../httpClient";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    httpClient.get("/api/user/allproducts").then(({ data }) => {
      setProducts(data);
    });
  }, []);
  return (
    <div className="c-adminDashboard">
      <h1>Admin Page</h1>
      {products &&
        products.map(product => (
          <div key={product.name}>
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Color: {product.color}</p>
            <p>Sizes:</p>
            {product.sizes.map(size => (
              <div key={size.size}>
                <p>Size: {size.size}</p>
                <p>Quantity: {size.quantity}</p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default AdminDashboard;
