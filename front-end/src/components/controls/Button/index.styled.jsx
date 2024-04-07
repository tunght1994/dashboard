import styled from 'styled-components'

const WrapButton = styled.button`
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	padding: 8px 9px;
	background: #569c59;
	border: none;
	outline: none;

	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	letter-spacing: 0.15px;
	color: #ffffff;

	cursor: pointer;
	&.disable {
		opacity: 0.5;
	}
`

export { WrapButton }
