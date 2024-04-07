import React, { useEffect, useState } from 'react'

// styled
import WrapTableFooter from './index.styled'

// controls
import InputDropdown from '@controls/InputDropdown'

// images
import IcArrowLeftActive from '@assets/images/IcArrowLeftActive'
import IcArrowRightActive from '@assets/images/IcArrowRightActive'

// data
import NumberRowsPerPage from '@data/NumberRowsPerPage'
import IcArrowLeft from '@assets/images/IcArrowLeft'
import IcArrowRight from '@assets/images/IcArrowRight'

const TableFooter = ({
	range,
	page,
	slice,
	setSelectedOption,
	selectedOption,
	data,
	onChangePage,
}) => {
	const [numberDataFrom, setNumberDataFrom] = useState(1)
	const [numberDataTo, setNumberDataTo] = useState(selectedOption)

	return (
		<WrapTableFooter>
			<div className="footer-rows-per">
				<div className="value">Rows per page:</div>
				<InputDropdown
					isCheckDropDownTop={true}
					listOption={NumberRowsPerPage}
					defaultSelect={NumberRowsPerPage[0].value}
					className="per-page"
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
				/>
			</div>
			<div className="number">
				1 - 10 of
				<span>{data.length || 0}</span>
			</div>
			<div>
				<div className="button-arrow">
					<div onClick={page === 1 ? null : () => onChangePage(page - 1)}>
						{page === 1 ? <IcArrowLeft /> : <IcArrowLeftActive />}
					</div>
					<div
						onClick={
							page === range.length ? null : () => onChangePage(page + 1)
						}
					>
						{page === range.length ? <IcArrowRight /> : <IcArrowRightActive />}
					</div>
				</div>
			</div>
		</WrapTableFooter>
	)
}

export default TableFooter
