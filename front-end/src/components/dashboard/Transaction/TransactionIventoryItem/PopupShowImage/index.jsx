import React, { useRef } from 'react'
import { WrapPopupShowImage } from './index.style'
import OverlayFullScreen from '../../../../../controls/OverlayFullScreen'
import { useOnClickOutside } from '../../../../../hook/useClickOutside'

const PopupShowImage = ({ items, closePopup }) => {
    console.log(items)
    const itemRef = useRef()

    useOnClickOutside(itemRef , () => closePopup())
    
  return (
    <OverlayFullScreen>
        <WrapPopupShowImage ref={itemRef}>
        <div className="content-img">
            <img src={items} alt="" />
        </div>
        </WrapPopupShowImage>
    </OverlayFullScreen>
  )
}

export default PopupShowImage