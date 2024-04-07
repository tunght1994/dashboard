// src/components/AddInformationForm.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddInventoryWrap } from "./AddInventory.style";

const AddInvenory = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);

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
    console.log(newInfo);
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
    <AddInventoryWrap>
      <div className="invetory-content">
        <div className="invetory-content-item">
          <div className="value">Product Name:</div>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
          />
        </div>
        <div className="invetory-content-item">
          <div className="value">Quantity:</div>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
          />
        </div>
        <div className="invetory-content-item">
          <div className="value">Price:</div>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
          />
        </div>
        <div className="invetory-content-item">
          <div className="value">Images:</div>
          <input
            type="file"
            accept="image/*"
            multiple
            className="img-file"
            onChange={handleImageChange}
          />
        </div>
        <button className="btn-submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </AddInventoryWrap>
  );
};

export default AddInvenory;
