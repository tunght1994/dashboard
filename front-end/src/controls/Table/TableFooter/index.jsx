import React, { useEffect, useState } from 'react'

// styled
import WrapTableFooter from './index.styled'

// controls
// import InputDropdown from '@controls/InputDropdown'

// images

// data
import NumberRowsPerPage from '@data/NumberRowsPerPage'
import { Icons } from '../../../assets/icons'
// import IcArrowLeft from '@assets/images/IcArrowLeft'
// import IcArrowRight from '@assets/images/IcArrowRight'

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
				{/* <div className="value">Rows per page:</div>
				<InputDropdown
					isCheckDropDownTop={true}
					listOption={NumberRowsPerPage}
					defaultSelect={NumberRowsPerPage[0].value}
					className="per-page"
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
				/> */}
			</div>
			<div className="number">
				1 - 10 of
				<span>{data.length || 0}</span>
			</div>
			<div>
				<div className="button-arrow">
					<div onClick={page === 1 ? null : () => onChangePage(page - 1)}>
						{page === 1 ? Icons.IcArrowLeftActives : Icons.IcArrowLeftActives}
					</div>
					<div
						onClick={
							page === range.length ? null : () => onChangePage(page + 1)
						}
					>
						{page === range.length ? Icons.IcArrowRightActive : Icons.IcArrowRightActive}
					</div>
				</div>
			</div>
		</WrapTableFooter>
	)
}

export default TableFooter
