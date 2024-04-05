// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Inventory Management</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/add-product">Add Product</Link>
      </div>
    </nav>
  );
}

export default Navbar;
