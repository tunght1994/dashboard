import React from 'react'

// styled
import { WrapButton } from './index.styled'

const Button = ({ text, className, isDisable, iconBtn, onClick, ...props }) => {
	return (
		<WrapButton
			className={`${className}${isDisable ? 'disable' : ''}`}
			onClick={onClick}
			{...props}
		>
			{iconBtn}
			{text}
		</WrapButton>
	)
}

export default Button
