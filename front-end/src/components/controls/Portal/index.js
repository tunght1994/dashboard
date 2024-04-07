import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }) => {
    const elRef = useRef(document.createElement('div'))

    useEffect(() => {
        document.body.appendChild(elRef.current);
        return () => {
            elRef.current && document.body.removeChild(elRef.current);
            elRef.current = null
        }
    }, [])

    return createPortal(children, elRef.current)
}

export default Portal
