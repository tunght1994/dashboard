import React, { useEffect, useMemo, useRef, useState } from "react";
import { TransactionWrap } from "./TransactionInventory.style";
import { dataHeaderListLocator } from "../../../data/dataTransaction";
import { useDispatch, useSelector } from 'react-redux';
import { exportDataToExcel, getTransactionInventory } from "../../../redux/transaction/transactionThunk";
import EmptyData from "../../../controls/EmptyData";
import { Icons } from "../../../assets/icons";
import TransactionIventoryItem from "./TransactionIventoryItem";

import useScrollEnd from "../../../hook/useScrollEnd";
import Portal from "../../../controls/Portal";
import AddInvenory from "../form/AddInventory/AddInventory";

const TransactionInventory = () => {
  const [isShowPopupAddInventory, setIsShowPopupAddInventory] = useState(false);
  const itemsPerPage = 13;
  const listRef = useRef();

  const dispatch = useDispatch();

  const { listTransactionInventory, totalListTransactionInventory, currentPage } = useSelector((state) => ({
    listTransactionInventory: state.transactionInventory.transactionList,
    totalListTransactionInventory: state.transactionInventory.total,
    currentPage: state.transactionInventory.currentPage
  }));

  useEffect(() => {
    dispatch(getTransactionInventory(itemsPerPage, "", currentPage, false));
  }, []);

  useScrollEnd(listRef, () => {
    const lastId = listTransactionInventory[listTransactionInventory.length - 1]?._id
    dispatch(getTransactionInventory(itemsPerPage, lastId, currentPage, true));
  }, [listTransactionInventory], [listTransactionInventory.length]);


  const handleExport = () => {
    if (listTransactionInventory.length === 0) return
    dispatch(exportDataToExcel());
  };

  const handleShowPopupAddInventory = () => {
    setIsShowPopupAddInventory(true)
  };

  return (
    <TransactionWrap>
      <div className="transaction-filter">
        <div className="transaction-filter-content" onClick={handleShowPopupAddInventory}>
          <img src={Icons.IcAdd} alt="IcAdd" className="icon" />
          <div className="text">Add Inventory</div>
        </div>
        {
          isShowPopupAddInventory && <Portal>
            <AddInvenory closePopup={() => setIsShowPopupAddInventory(false)} itemsPerPage={itemsPerPage}/>
          </Portal>
        }
        <div className="transaction-filter-content" onClick={handleExport}>
          <img src={Icons.IcExport} alt="IcExport" className="icon" />
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
                    <TransactionIventoryItem key={index} item={item} index={index} />
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
