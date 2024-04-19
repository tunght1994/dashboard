import React, { useEffect, useState } from 'react'
import { WrapTransactionInventoryItem } from './index.style'
import convertDateTime from '../../../../helper/convertTime'
import Button from '../../../../controls/Button'
import Portal from './../../../../controls/Portal/index';
import PopupShowImage from './PopupShowImage';

const TransactionIventoryItem = ({ item }) => {

  const [isShowImage, setIsShowImage] = useState(false)


  return (
    <WrapTransactionInventoryItem >
        <div className="content-item">
          <div>{convertDateTime(item.createAt, "DD/MM/YYYY")}</div>
          <div>{item.productName}</div>
          <div>{item.quantity}</div>
          <div>{item.price}</div>
          <Button text="Xem" onClick={() => setIsShowImage(true)}/>
        </div>
        {
          isShowImage && (
            <Portal>
                <PopupShowImage items={item.images} closePopup={() => setIsShowImage(false)}/>
            </Portal>
          )
        }
    </WrapTransactionInventoryItem>
  )
}

export default TransactionIventoryItem