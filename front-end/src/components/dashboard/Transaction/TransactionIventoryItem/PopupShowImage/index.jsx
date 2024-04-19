import React, { useRef } from 'react'
import { WrapPopupShowImage } from './index.style'
import OverlayFullScreen from '../../../../../controls/OverlayFullScreen'
import { useOnClickOutside } from '../../../../../hook/useClickOutside'

const PopupShowImage = ({ items, closePopup }) => {

    const itemRef = useRef()

    useOnClickOutside(itemRef , () => closePopup())
    
  return (
    <OverlayFullScreen>
        <WrapPopupShowImage ref={itemRef}>
            {
                items.length === 0 ? (
                    <></>
                ) : (
                    items.map((item, index) => (
                        <div className="content-img" key={index}>
                            <img src={item} alt="" />
                        </div>
                    ))
                )
            }
        </WrapPopupShowImage>
    </OverlayFullScreen>
  )
}

export default PopupShowImage