import styled from 'styled-components'

const WrapToggleButton = styled.button`
	position: relative;
	display: inline-block;
	width: 34px;
	height: 16px;
	border-radius: 10px;
	border: 1px solid #ccc;

	cursor: pointer;

	&:hover {
		background-color: #fff;
	}

	&.active {
		background-color: #569c59;
	}

	&.active .toggle-button-icon {
		transform: translateX(14px);
	}

	.toggle-button-icon {
		position: absolute;
		top: -3px;
		left: -2px;
		width: 20px;
		height: 20px;
		transition: transform 0.2s ease-in-out;
	}
`

export default WrapToggleButton
