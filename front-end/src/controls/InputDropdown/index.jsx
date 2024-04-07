import React, { useState } from 'react'

// styled
import { DropDownContainer } from './index.styled'

// images
import IcDropdown from '@assets/images/IcDropdown'
import IcDropdownTop from '@assets/images/IcDropdownTop'

const InputDropdown = ({
	selectedOption,
	setSelectedOption,
	listOption,
	defaultSelect,
	className,
	isCheckDropDownTop = false,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => setIsOpen(!isOpen)

	const onOptionClicked = (value) => () => {
		setSelectedOption(value)
		setIsOpen(false)
	}

	return (
		<DropDownContainer
			onClick={toggle}
			selectedOption={selectedOption}
			className={className}
		>
			<div className="dropdown-header">
				{selectedOption || defaultSelect}
				<div className="icon">
					{isCheckDropDownTop ? <IcDropdownTop /> : <IcDropdown />}
				</div>
			</div>
			{isOpen && (
				<div className="dropdown-list">
					<ul className="dropdown-list-content">
						{listOption.map((item, index) => (
							<li
								onClick={onOptionClicked(item.value)}
								key={index}
								className="dropdown-list-content-item"
							>
								{isCheckDropDownTop ? item.value + ' Rows' : item.value}
							</li>
						))}
					</ul>
				</div>
			)}
		</DropDownContainer>
	)
}

export default InputDropdown
