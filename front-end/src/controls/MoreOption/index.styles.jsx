import styled from 'styled-components'

const WrapMoreOption = styled.div`
	position: relative;
	height: 16px;
	width: 16px;
	svg {
		cursor: pointer;
	}
	.wrap-option {
		background: #ffffff;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		z-index: 10;
		position: absolute;
		right: 20px;
		bottom: ${(props) => props.propsPopup};
		.wrap {
			padding: 15px 12px;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			font-family: 'Open Sans';
			font-size: 13px;
			line-height: 18px;
			letter-spacing: -0.01em;
			color: #313131;
			background: #ffffff;
			box-shadow: inset 0px -0.5px 0px rgba(0, 0, 0, 0.15);
			cursor: pointer;
			svg {
				flex-shrink: 0;
				margin-right: 5px;
				white-space: nowrap;
			}
			span {
				flex-shrink: 0;
				white-space: nowrap;
			}
			&:first-of-type {
				border-radius: 4px 4px 0 0;
			}
			&:last-of-type {
				border-radius: 0 0 4px 4px;
			}
		}
	}
`

export { WrapMoreOption }
