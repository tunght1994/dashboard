import React, { useEffect, useMemo, useRef, useState } from "react";
import { TransactionWrap } from "./TransactionInventory.style";
import { dataHeaderListLocator } from "../../../data/dataTransaction";
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionInventory } from "../../../redux/transaction/transactionThunk";
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
    if (listTransactionInventory.length < totalListTransactionInventory) {
      const lastId = listTransactionInventory[listTransactionInventory.length - 1]?._id;
      dispatch(getTransactionInventory(itemsPerPage, lastId, true));
    }
  }, [listTransactionInventory, totalListTransactionInventory], [listTransactionInventory.length]);

  return (
    <TransactionWrap>
      {selectedIndex !== null ? (
        <></>
      ) : (
        ""
      )}
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
