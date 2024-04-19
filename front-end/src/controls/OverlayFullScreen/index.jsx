import React from 'react'

import { WrapOverlayFullScreen } from './index.styles'

const OverlayFullScreen = ({ children, isCenter=true, ...props }) => {
    return (
        <WrapOverlayFullScreen {...props}>
            {
                isCenter
                ? (
                    <div className="wrap-inner-screen">
                        {children}
                    </div>
                )
                : children
            }
        </WrapOverlayFullScreen>
    )
}

export default OverlayFullScreen
