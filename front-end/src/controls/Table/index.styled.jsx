import styled from 'styled-components'

const WrapTableListItem = styled.div`
	width: 100%;
	height: 98%;
	table {
		width: 100%;
		height: 100%;
		border-collapse: collapse;
		// overflow-x: scroll;
		display: block;
	}

	thead {
		height: 48px;
		background: #f6f6f6;
	}
	tbody{
		height: 734px;
	}
	tr{
		display: flex !important;
		align-items: center;
		justify-content: center;
	}
	thead,
	tbody,
	tr {
		display: block;
		width: calc(100% - 4px);
	}

	tr {
		border-bottom: 1px #dddddd solid;
		height: 100%;
	}

	td,
	th {
		text-align: left;
		padding: 8px;
		font-style: normal;
		font-size: 16px;
		line-height: 24px;
		color: #191919;

		width: ${(props) =>
			props.styledWidth ? `calc(100%/${props.styledWidth})` : '100%'};
		overflow: hidden;
		text-overflow: ellipsis;
		display: inline-block;
		&.header {
			font-weight: 500;
			letter-spacing: 0.15px;
		}
	}

	.value {
		height: 58px;
		font-weight: 400;
		letter-spacing: 0.01em;
		overflow: hidden;
		text-overflow: ellipsis;
		overflow-wrap: break-word;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		cursor: pointer;
	}
	.hover {
		height: 72px;
		display: flex;
		align-items: center;
		&:hover {
			background: #eeffea;
		}
	}
`

export { WrapTableListItem }
