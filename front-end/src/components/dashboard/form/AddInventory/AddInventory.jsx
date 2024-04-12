// src/components/AddInformationForm.js

import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AddInventoryWrap } from "./AddInventory.style";
import { submitForm } from './../../../../redux/form/inventoryThunks';

const AddInvenory = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null); 
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !productName.trim() ||
      !quantity.trim() ||
      !price.trim() ||
      images.length === 0
    )
      return;

    const formData = {
      productName: productName,
      quantity: quantity,
      price: price,
      images: images
    }
    dispatch(submitForm(formData));

  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    const imageUrls = [];
  
    selectedImages.forEach(image => {
      const reader = new FileReader();
      reader.onload = (event) => {
        imageUrls.push(event.target.result);
        
        if (imageUrls.length === selectedImages.length) {
          setImages(imageUrls);
        }
      };
      reader.readAsDataURL(image);
    });
  };

  return (
    <AddInventoryWrap>
      <div className="invetory-content">
        <div className="invetory-content-item">
          <div className="value">Tên sản phẩm</div>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Nhập tên sản phẩm"
          />
        </div>
        <div className="invetory-content-item">
          <div className="value">Số lượng</div>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Nhập số lượng sản phẩm"
          />
        </div>
        <div className="invetory-content-item">
          <div className="value">Giá sản phẩm</div>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Nhập giá tiền sản phẩm"
          />
        </div>
        <div className="invetory-content-item">
          <div className="value">Hình ảnh thanh toán</div>
          <input
            type="file"
            accept="image/*"
            multiple
            className="img-file"
            ref={fileInputRef}
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
