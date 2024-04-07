import React from 'react'

//style
import * as styles from './index.style'
import { Icons } from '../../assets/icons'
//image


const EmptyData = ({ icon, text, className }) => {
	return (
		<styles.Bound className={className}>
			<div className="empty-container">
				<div className="icon">{icon ? icon : Icons.Empty}</div>
				<p>{text ? text : 'There are currently no new data'}</p>
			</div>
		</styles.Bound>
	)
}

export default EmptyData
