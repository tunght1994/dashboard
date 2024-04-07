import styled from 'styled-components'

const WrapMyTimePicker = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	.timepicker {
		display: flex;
		align-items: center;
		position: relative;
	}

	.timepicker-input {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: white;
		border: 1px solid #d9d9d9;
		border-radius: 4px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
		font-size: 14px;
		padding: 12px;
		width: 138px;
		height: 48px;

		.timepicker-input-icon {
			display: flex;
			align-items: center;
		}
	}

	.timepicker-input input {
		border: none;
		outline: none;
		background-color: transparent;
		font-size: 14px;
		width: 25px;
		text-align: center;
	}

	.timepicker-input span {
		margin: 0 4px;
	}

	.timepicker-dropdown {
		height: 276px;
		position: absolute;
		top: 50px;
		left: 0;
		background-color: white;
		border: 1px solid #d9d9d9;
		border-radius: 4px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
		display: flex;
		gap: 10px;
		padding: 16px;
		z-index: 1;

		.timepicker-dropdown-hour,
		.timepicker-dropdown-minute {
			max-height: 100%;
			overflow-y: auto;
		}
		.timepicker-dropdown-hour::-webkit-scrollbar,
		.timepicker-dropdown-minute::-webkit-scrollbar {
			width: 0px;
		}

		.hour,
		.minute {
			padding: 4px 16px;
			cursor: pointer;
			&:hover {
				background: #569c59;
				border-radius: 2px;
			}
		}
	}
`
export default WrapMyTimePicker
