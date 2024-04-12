import styled from 'styled-components'

const WrapTableFooter = styled.div`
	background-color: #fff;
	width: 100%;
	font-weight: 500;
	text-align: left;
	font-size: 16px;
	color: #2c3e50;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 26px;
	padding: 0 8px;
	.pagination-controls{
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		.pagination-button{
			font-size: 18px;
			cursor: pointer;
		}
		.active{
			background: #569c59;
			width: 20px;
			height: 20px;
			color: #fff;
		}
	}
`

export default WrapTableFooter
