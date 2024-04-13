import React, { useEffect, useMemo, useRef, useState } from "react";
import { TransactionWrap } from "./TransactionInventory.style";
import { dataHeaderListLocator } from "../../../data/dataTransaction";
import { useDispatch, useSelector } from 'react-redux';
import { exportDataToExcel, getTransactionInventory } from "../../../redux/transaction/transactionThunk";
import EmptyData from "../../../controls/EmptyData";
import { Icons } from "../../../assets/icons";
import TransactionIventoryItem from "./TransactionIventoryItem";

import useScrollEnd from "../../../hook/useScrollEnd";

const TransactionInventory = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const itemsPerPage = 13;
  const listRef = useRef();

  const dispatch = useDispatch();

  const { listTransactionInventory, totalListTransactionInventory } = useSelector((state) => ({
    listTransactionInventory: state.transactionInventory.transactionList,
    totalListTransactionInventory: state.transactionInventory.total
  }));

  useEffect(() => {
    dispatch(getTransactionInventory(itemsPerPage, "", false));
  }, []);

  useScrollEnd(listRef, () => {
    const lastId = listTransactionInventory[listTransactionInventory.length - 1]?._id;
    dispatch(getTransactionInventory(itemsPerPage, lastId, true));
    console.log('first')
  }, [listTransactionInventory], [listTransactionInventory.length]);
  

  const handleExport = () => {
    if(listTransactionInventory.length === 0) return
    dispatch(exportDataToExcel());
  };

  return (
    <TransactionWrap>
      {selectedIndex !== null ? (
        <></>
      ) : (
        ""
      )}
      <div className="transaction-filter">
        <div className="transaction-filter-export" onClick={handleExport}>
          <img src={Icons.IcExport} alt="IcExport" className="icon-export"/>
          <div className="text">Export</div>
        </div>
      </div>
      <div className="transaction-list">
        <div className="header">
          {dataHeaderListLocator &&
            dataHeaderListLocator.map((item, index) => (
              <div key={index}>
                {item.header}
              </div>
            ))}
        </div>
        {
          listTransactionInventory.length === 0 ? (
            <EmptyData icon={Icons.Empty} text="No search results" />
          ) : (
            <div className="wrap-transaction-list" ref={listRef}>
              <div className="list-transaction">
                {
                  listTransactionInventory?.map((item, index) => (
                    <TransactionIventoryItem key={index} item={item} index={index} setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex} />
                  ))
                }
              </div>
            </div>
          )
        }
      </div>
    </TransactionWrap>
  );
};

export default TransactionInventory;
