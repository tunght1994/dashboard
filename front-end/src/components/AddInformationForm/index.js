// src/components/AddInformationForm.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddInformationForm = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  console.log('first')
  const handleSubmit = (e) => {

    e.preventDefault();
    if (
      !productName.trim() ||
      !quantity.trim() ||
      !price.trim() ||
      images.length === 0
    )
      return;

    const newInfo = {
      id: parseInt(Math.random()),
      productName,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      images: images.map((image) => URL.createObjectURL(image)),
    };

    setProductName("");
    setQuantity("");
    setPrice("");
    setImages([]);
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  return (
    <>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product name"
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity"
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price"
        />
      </div>
      <div>
        <label>Images:</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
};

export default AddInformationForm;
