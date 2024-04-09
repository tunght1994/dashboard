import React, { useEffect, useState } from "react";
import { TransactionWrap } from "./Transaction.style";
import axios from "axios";
import Table from "../../../controls/Table";
import { dataHeaderListLocator } from "../../../data/dataTransaction";
import Portal from "../../controls/Portal";
import Popup from "../../controls/Popup";

const Transaction = () => {
  const [products, setProducts] = useState([]);
  const [selectedIndex, setSelectedIndex]= useState(null)
  const [isShowPopup, setIsShowPopup]= useState(false)


  useEffect(() => {
    axios.get('http://localhost:5000/api/inventory')
      .then(res => {
        setProducts(res.data.data);
      })
      .catch(err => {
        if (err.response) {
          console.error('Server responded with status:', err.response.status);
          console.error('Response data:', err.response.data);
        } else if (err.request) {
          console.error('No response received from the server.');
        } else {
          console.error('Error:', err.message);
        }
      });
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
