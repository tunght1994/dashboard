// src/components/AddInformationForm.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddInventoryWrap } from "./AddInventory.style";
import axios from "axios";

const AddInvenory = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
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
    try {
      // Make a POST request using Axios
      const response = await axios.post('http://localhost:5000/api/products', formData);
      console.log(response.data); // Log the response from the server
      // Clear form fields and images after successful submission
      setProductName("");
      setQuantity("");
      setPrice("");
      setImages([]);
    } catch (error) {
      console.error('Error submitting form:', error); // Log any errors
    }
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    const imageUrls = [];
  
    // Lặp qua từng tệp hình ảnh đã chọn
    selectedImages.forEach(image => {
      // Tạo một đối tượng FileReader
      const reader = new FileReader();
      
      // Định nghĩa hàm xử lý khi đọc xong tệp
      reader.onload = (event) => {
        // Lấy đường dẫn của hình ảnh và thêm vào mảng imageUrls
        imageUrls.push(event.target.result);
        
        // Kiểm tra nếu đã đọc xong tất cả các hình ảnh thì cập nhật state
        if (imageUrls.length === selectedImages.length) {
          setImages(imageUrls);
        }
      };
      
      // Đọc tệp hình ảnh
      reader.readAsDataURL(image);
    });
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
