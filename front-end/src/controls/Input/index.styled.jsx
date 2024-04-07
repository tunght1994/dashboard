import styled from 'styled-components'

const WrapInput = styled.div`
	height: 48px;
	.wrap-input {
		height: 48px;
		position: relative;
		display: flex;
		align-items: center;
		.icon-left {
			position: absolute;
			right: 13px;
			top: 14px;
		}
		input {
			height: 100%;
			width: 100%;
			margin-left: 50p;
			box-sizing: border-box;
			padding: 12px;
			border: 0.5px solid #b7b7b7;
			border-radius: 4px;
			color: #313131;
			letter-spacing: -0.01em;
			font-size: 13px;
			line-height: 18px;
			outline: none;

			&:disabled {
				background: #f7f7f7;
				color: #b7b7b7;
			}
			&::placeholder {
				color: ${(props) => (props.errorInput ? '#f45c5c' : '#b7b7b7')};
			}
		}
		& > .error-input {
			border: 0.5px solid #f45c5c;
		}
	}
	.error {
		color: #f45c5c;
		font-style: normal;
		font-weight: normal;
		font-size: 13px;
		line-height: 15px;
		padding: 4px 0 0 0;
		float: left;
	}
`

export { WrapInput }
