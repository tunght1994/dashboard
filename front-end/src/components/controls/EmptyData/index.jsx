import React from 'react'

//style
import * as styles from './index.style'
//image

import IcEmpty from '@assets/images/IcEmpty'

const EmptyData = ({ icon, text, className }) => {
	return (
		<styles.Bound className={className}>
			<div className="empty-container">
				<div className="icon">{icon ? icon : <IcEmpty />}</div>
				<p>{text ? text : 'There are currently no new data'}</p>
			</div>
		</styles.Bound>
	)
}

export default EmptyData
