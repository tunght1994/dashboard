import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }) => {
    const elRef = useRef(document.createElement('div'))

    // const _handleResize = () => {
    //     document.body.style.height =  `${window.innerHeight}px`;
    //     document.getElementById('app-root').style.height =  `${window.innerHeight}px`;
    // }

    // useEffect(() => {
    //     _handleResize()
    //     window.addEventListener('resize', _handleResize)
    //     return () => {
    //         window.removeEventListener('resize', _handleResize)
    //     }
    // }, []);

    useEffect(() => {
        document.body.appendChild(elRef.current);
        return () => {
            elRef.current && document.body.removeChild(elRef.current);
            elRef.current = null
            // _handleResize()
        }
    }, [])

    return createPortal(children, elRef.current)
}

export default Portal
