import React, { useEffect, useRef, useState } from 'react'

//styles
import { WrapMoreOption } from './index.styles'

//image
import IcMoreOption from '../../../assets/images/IcMoreOption'

//hooks
import { useOnClickOutside } from '../../../hook/useClickOutside'

const MoreOption = ({ className, dataOption, refList }) => {
	const [isShowOption, setIsShowOption] = useState(false)
	const [isOutList, setIsOutList] = useState('')

	const refOption = useRef(null) //ref btn option
	const refPopup = useRef(null) //ref popup

	useEffect(() => {
		if (!refList) return
		if (isShowOption && refList) {
			const listRect = refList.current.getBoundingClientRect() // ref list
			const { height, top } = listRect

			const PopupRect = refPopup.current.getBoundingClientRect() // ref popup

			const hightY = height + top
			const isOutY = PopupRect.top + PopupRect.height
			if (isOutY > hightY) {
				setIsOutList(0)
			}
		} else {
			setIsOutList('')
		}
	}, [isShowOption, refList])

	const _handleOpenOption = (event) => {
		event.stopPropagation()
		setIsShowOption(!isShowOption)
	}

	const _handleClick = (callback, event) => {
		event.stopPropagation()
		setIsShowOption(!isShowOption)
		callback && callback()
	}

	useOnClickOutside(refOption, () => setIsShowOption(false))

	return (
		<WrapMoreOption
			className={className}
			ref={refOption}
			propsPopup={isOutList}
		>
			<IcMoreOption onClick={_handleOpenOption} />
			{isShowOption && (
				<div className="wrap-option" ref={refPopup}>
					{dataOption.map((dataItem, index) => (
						<div
							className="wrap"
							key={index}
							onClick={(e) => _handleClick(dataItem.handleOption, e)}
						>
							<dataItem.Icon />
							<span>{dataItem.text}</span>
						</div>
					))}
				</div>
			)}
		</WrapMoreOption>
	)
}

export default MoreOption
