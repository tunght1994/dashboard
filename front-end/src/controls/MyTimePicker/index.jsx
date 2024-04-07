import React, { useState } from 'react'

import WrapMyTimePicker from './index.styled'
import IcDropdownTop from '@assets/images/IcDropdownTop'
import IcDropdown from '@assets/images/IcDropdown'

const MyTimePicker = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [hour, setHour] = useState(0)
	const [minute, setMinute] = useState(0)

	const toggle = () => setIsOpen(!isOpen)

	const handleHourChange = (e) => {
		let value = parseInt(e.target.value)
		if (value < 0 || value > 23) {
			value = 0
		}
		setHour(value)
	}

	const handleMinuteChange = (e) => {
		let value = parseInt(e.target.value)
		if (value < 0 || value > 59) {
			value = 0
		}
		setMinute(value)
	}

	const formatNumber = (number) => {
		return number < 10 ? '0' + number : number
	}

	return (
		<WrapMyTimePicker onClick={toggle}>
			<div className="timepicker">
				<div className="timepicker-input">
					<div className="timepicker-input-time">
						<input
							type="text"
							placeholder="HH"
							value={formatNumber(hour)}
							onChange={handleHourChange}
						/>
						<span>:</span>
						<input
							type="text"
							placeholder="MM"
							value={formatNumber(minute)}
							onChange={handleMinuteChange}
						/>
					</div>
					<div className="timepicker-input-icon">
						{isOpen ? <IcDropdownTop /> : <IcDropdown />}
					</div>
				</div>
				{isOpen && (
					<div className="timepicker-dropdown">
						<div className="timepicker-dropdown-hour">
							{[...Array(24).keys()].map((hour) => (
								<div key={hour} className="hour" onClick={() => setHour(hour)}>
									{formatNumber(hour)}
								</div>
							))}
						</div>
						<div className="timepicker-dropdown-minute">
							{[...Array(60).keys()].map((minute) => (
								<div
									key={minute}
									className="minute"
									onClick={() => setMinute(minute)}
								>
									{formatNumber(minute)}
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</WrapMyTimePicker>
	)
}

export default MyTimePicker
