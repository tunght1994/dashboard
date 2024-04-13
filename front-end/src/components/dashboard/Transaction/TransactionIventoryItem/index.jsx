import React from 'react'
import { WrapTransactionInventoryItem } from './index.styles'
import convertDateTime from '../../../../helper/convertTime'
import Button from '../../../../controls/Button'

const TransactionIventoryItem = ({ item, setSelectedIndex, index}) => {

  const handleSelectedIndex = (index) => {
    setSelectedIndex(index);
  };

  return (
    <WrapTransactionInventoryItem >
        <div className="content-item">
          <div>{convertDateTime(item.createAt, "DD/MM/YYYY")}</div>
          <div>{item.productName}</div>
          <div>{item.quantity}</div>
          <div>{item.price}</div>
          <Button text="Xem" onClick={() => handleSelectedIndex(index)}/>
        </div>
        
    </WrapTransactionInventoryItem>
  )
}

export default TransactionIventoryItem