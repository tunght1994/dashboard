// src/components/AddInformationForm.js

import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AddInventoryWrap } from "./AddInventory.style";
import { submitForm } from '../../../../redux/form/inventoryThunk';
import OverlayFullScreen from "../../../../controls/OverlayFullScreen";
import { useOnClickOutside } from "../../../../hook/useClickOutside";
import { getTransactionInventory } from "../../../../redux/transaction/transactionThunk";

const AddInvenory = ({ closePopup, itemsPerPage }) => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null); 
  const outRef = useRef(null)

  const dispatch = useDispatch();

  const callbackSuccess = () => {
    closePopup()
    dispatch(getTransactionInventory(itemsPerPage, "", false));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!productName.trim() || !quantity.trim() || !price.trim() || images.length === 0) {
      return;
    }
  
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('quantity', quantity);
    formData.append('price', price);
    images.forEach((image) => {
      formData.append('image', image);
    });
  
    dispatch(submitForm(formData, callbackSuccess))
    setProductName("");
    setQuantity("");
    setPrice("");
    fileInputRef.current.value = "";

  };
  

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    selectedImages.forEach(image => {
      if (image.size > 1000000) {
        console.log(`Hình ảnh ${image.name} vượt quá kích thước cho phép`);
        return; 
      }
      setImages(prevImages => [...prevImages, image]);
    });
  };


  useOnClickOutside(outRef, () => closePopup())

  return (
    <OverlayFullScreen>
      <AddInventoryWrap ref={outRef}>
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

    </OverlayFullScreen>
    
  );
};

export default AddInvenory;
