import styled from 'styled-components'

const Bound = styled.div`
	font-family: 'Roboto';
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100%;
	justify-content: center;
	align-items: center;
	font-style: normal;

	.empty-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	p {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 600;
		font-size: 13px;
		line-height: 18px;
		color: #777777;
		text-align: center;
		display: flex;
	}
`

export { Bound }
