import React, { useEffect, useState } from "react";
import { TransactionWrap } from "./Transaction.style";
import axios from "axios";
import Table from "../../../controls/Table";
import { dataHeaderListLocator } from "../../../data/dataTransaction";
import Portal from "../../controls/Portal";
import Popup from "../../controls/Popup";

const data = [
  {
    productName: "productName",
    quantity: 10,
    price: 1000,
    images: ["https://picsum.photos/480/480", "https://picsum.photos/480/480"],
  },
  {
    productName: "productName",
    quantity: 10,
    price: 1000,
    images: ["https://picsum.photos/480/480", "https://picsum.photos/480/480"],
  },
  {
    productName: "productName",
    quantity: 10,
    price: 1000,
    images: ["https://picsum.photos/480/480", "https://picsum.photos/480/480"],
  },
  {
    productName: "productName",
    quantity: 10,
    price: 1000,
    images: [],
  },
];

const Transaction = () => {
  const [products, setProducts] = useState([]);
  const [selectedIndex, setSelectedIndex]= useState(null)
  const [isShowPopup, setIsShowPopup]= useState(false)


  useEffect(() => {
    // axios.get('http://localhost:5000/api/products')
    //   .then(res => {
    //     setProducts(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    setProducts(data);
  }, []);

  
  return (
    <TransactionWrap>
      {selectedIndex !== null ? (
        <Portal>
          <Popup  data={products[selectedIndex]?.images || []} handleClose={() => setSelectedIndex(null)}/>
        </Portal>
      ) : (
        ""
      )}
      <ul>
        <Table
          columns={dataHeaderListLocator}
          data={products}
          setSelectedIndex={setSelectedIndex}
        />
      </ul>
    </TransactionWrap>
  );
};

export default Transaction;
