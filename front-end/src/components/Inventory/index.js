// Inventory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Inventory() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/api/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
      console.log(products)
  }, []);

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>Name:</strong> {product.productName}<br />
            <strong>Quantity:</strong> {product.quantity}<br />
            <strong>Price:</strong> ${product.price}<br />
            <strong>Images:</strong><br />
            {product.images.map((image, index) => (
              <img key={index} src={image} alt={`Product ${index + 1}`} style={{ width: '100px', marginRight: '10px' }} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
