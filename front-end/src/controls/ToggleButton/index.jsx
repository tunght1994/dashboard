import React from 'react'
import WrapToggleButton from './index.styled'
import IcToggle from '@assets/images/IcToggle'

const ToggleButton = ({ setIsActive, isActive }) => {
	const toggleBtn = () => setIsActive(!isActive)

	return (
		<WrapToggleButton
			onClick={toggleBtn}
			className={`${isActive ? 'active' : ''}`}
		>
			<IcToggle className="toggle-button-icon" />
		</WrapToggleButton>
	)
}

export default ToggleButton
