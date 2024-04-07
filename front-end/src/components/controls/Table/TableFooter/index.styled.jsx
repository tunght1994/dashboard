import styled from 'styled-components'

const WrapTableFooter = styled.div`
	background-color: #fff;
	width: 100%;
	font-weight: 500;
	text-align: left;
	font-size: 16px;
	color: #2c3e50;
	border: 1px #dddddd solid;

	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 26px;
	padding: 0 8px;
	.footer-rows-per {
		display: flex;
		align-items: center;
		.dropdown-list {
			top: -220px;
			&-content {
				width: 120px;
			}
		}

		.value {
			width: 120px;
			display: flex;
			align-items: center;
		}
		.per-page {
			border: none;
			width: 64px;
			background: none;
		}
	}

	.button-arrow {
		display: flex;
		gap: 12px;
		cursor: pointer;
	}
`

export default WrapTableFooter
