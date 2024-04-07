import React, { useMemo } from 'react'

//css
import { WrapCheckBoxItem } from './index.styled'

//img
import IcCheckBox from '@assets/images/IcCheckBox'
import IcUnCheckBox from '@assets/images/IcUnCheckBox'

const CheckboxItem = ({
	data,
	onCheck,
	onEdit,
	onDelete,
	renderValue,
	isChecked,
}) => {
	const renderCheckBox = useMemo(() => {
		if (isChecked) {
			return <IcCheckBox className="icon" />
		}
		return <IcUnCheckBox className="icon" />
	}, [isChecked])

	return (
		<WrapCheckBoxItem onClick={onCheck}>
			{renderCheckBox}
			<div className="value">{renderValue(data)}</div>
		</WrapCheckBoxItem>
	)
}
export default CheckboxItem
