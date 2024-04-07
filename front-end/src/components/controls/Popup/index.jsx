import React, { useRef } from 'react'

// styles

import { WrapPopup } from './index.styles'

//images
//component
import { OverlayFullScreen } from '../../../styles/global/default'
import { useOnClickOutside } from '../../../hook/useClickOutside'


const Popup = ({ data, handleClose }) => {
    const closeRef = useRef(null);
    useOnClickOutside(closeRef, handleClose);

    
    return (
      <OverlayFullScreen onClick={(e) => e.stopPropagation()}>
        <div className="wrap-inner-screen" ref={closeRef}>
          <WrapPopup>
            {data.map((itemImg, index) => (
              <img key={index} src={itemImg} alt="" />
            ))}
          </WrapPopup>
        </div>
      </OverlayFullScreen>
    );
  };

export default Popup 