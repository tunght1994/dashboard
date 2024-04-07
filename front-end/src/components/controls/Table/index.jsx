import React, { useMemo, useState } from 'react'

// styled
import { WrapTableListItem } from './index.styled'

// images
import IcEmpty from '@assets/images/IcEmpty'

// controls
import EmptyData from '@controls/EmptyData'

// data
import NumberRowsPerPage from '@data/NumberRowsPerPage'

// hook
import useTable from '../../hook/useTable'

// component
import TableFooter from './TableFooter'

const Table = ({ data = null, columns = null, hover = true, onClick }) => {
	const getCaps = (head, value) => {
		if (head) return head
		return value
	}

	const [page, setPage] = useState(1)
	const [selectedOption, setSelectedOption] = useState(
		NumberRowsPerPage[0].value
	)

	const { slice, range } = useTable(data, page, selectedOption)

	const handleChangePage = (pageNumber) => {
		setPage(pageNumber)
	}

	return (
		<WrapTableListItem styledWidth={columns.length}>
			<table>
				<thead>
					<tr>
						{columns &&
							columns.map((item, index) => (
								<th className="header" key={index}>
									{getCaps(item.header, item.value)}
								</th>
							))}
					</tr>
				</thead>
				<tbody>
					{slice.length === 0 ? (
						<EmptyData icon={<IcEmpty />} text="No search results" />
					) : (
						slice.map((item, index) => (
							<tr className={`${hover && 'hover'}`} key={index}>
								{columns.map((col, index) => (
									<td className="value" key={index} onClick={onClick}>
										{item[col.value]}
									</td>
								))}
							</tr>
						))
					)}
				</tbody>
			</table>
			<TableFooter
				onChangePage={handleChangePage}
				data={data}
				slice={slice}
				page={page}
				range={range}
				selectedOption={selectedOption}
				setSelectedOption={setSelectedOption}
			/>
		</WrapTableListItem>
	)
}

export default Table
