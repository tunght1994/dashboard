import styled from 'styled-components'
const DropDownContainer = styled.div`
	width: 480px;
	height: 48px;

	padding: 12px;
	gap: 12px;
	background: #ffffff;
	border: 1px solid #d1d1d1;
	border-radius: 4px;
	position: relative;
	cursor: pointer;
	.dropdown-header {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0.01em;
		color: ${(props) => (props.selectedOption ? '#191919' : '#A3A3A3')};
		display: flex;
		justify-content: space-between;
	}
	.dropdown-list {
		z-index: 1;
		position: absolute;
		top: 48px;
		left: 0;
		width: 100%;
		.dropdown-list-content {
			font-style: normal;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			letter-spacing: 0.15px;
			color: #191919;
			background: #ffffff;
			border: 1px solid #d1d1d1;
			margin: 0;
			padding: 0;

			&-item {
				list-style: none;
				border-bottom: 1px solid #d1d1d1;
				padding: 10px;
			}
		}
	}
`

export { DropDownContainer }
