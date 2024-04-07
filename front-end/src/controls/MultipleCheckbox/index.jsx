import IcAdd from '@assets/images/IcAdd'
import CheckboxItem from './CheckboxItem'
import WrapMultipleCheckbox from './index.styled'

const MultipleCheckbox = ({
	name,
	list,
	listCheck,
	handleAdd,
	handleCheckItem,
	handleEditItem,
	handleDeleteItem,
	renderValue,
}) => {
	return (
		<WrapMultipleCheckbox>
			<div className="title-multiple-checkbox">
				<span>{name || ''}</span>
				{name && <IcAdd className="ic-add" onClick={handleAdd} />}
			</div>
			<div className="list-checkbox">
				{list.map((item) => {
					const { key } = item
					const listKeyChecked = listCheck?.map((item) => {
						return item
					})
					const isChecked = listKeyChecked?.includes(key)
					return (
						<CheckboxItem
							key={key}
							data={item}
							isChecked={isChecked}
							onCheck={() => handleCheckItem(key)}
							onEdit={handleEditItem}
							onDelete={handleDeleteItem}
							renderValue={renderValue}
						/>
					)
				})}
			</div>
		</WrapMultipleCheckbox>
	)
}
export default MultipleCheckbox
