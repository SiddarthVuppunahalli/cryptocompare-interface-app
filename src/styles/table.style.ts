import styled from "styled-components";

interface DivProps {
    widthSize?: number,

};

export const TableWrap = styled.div`
	min-height: 440px;
	box-sizing: border-box;
	background: #ffffff;
	width: 80%;
`;

export const TableHeaderCell = styled.div`
    width: 9.5%;
	height: 100%;
	display: flex;
	padding: 2px 10px;
	display: flex;
	flex-wrap: wrap;
	word-break: keep-all;
	white-space: normal;
	overflow: hidden;
	text-overflow: ellipsis;
	justify-content: left;
	align-items: center;
	text-align: left;
	padding-left: 20px;
	color: black;
	div {
		flex: 1;
	}
`;

export const TableCell = styled.div`
    width: 10%;
	height: 100%;
	display: flex;
	padding: 2px 10px;
	display: flex;
	flex-wrap: wrap;
	word-break: keep-all;
	white-space: normal;
	overflow: hidden;
	text-overflow: ellipsis;
	justify-content: left;
	align-items: center;
	text-align: left;
	padding-left: 20px;
	color: black;
	div {
		flex: 1;
	}
`;

export const TableRow = styled.div<DivProps>`
	display: flex;
	height: 50px;
	align-items: center;
	border: 1px solid #eff0f2;
	padding-left: 10px;
	text-align: center;
	width: 100%;
	> ${TableCell}:last-child {
		flex: 1;
	}
`;

export const TableRowWrap = styled.div`
	min-height: 225px;
	background: white;
`;


export const HeaderCell = styled.div`
	display: flex;
	height: 50px;
	align-items: center;
	border: 1px solid #e8e8e8;
	padding-left: 10px;
	border-radius: 5px 5px 0px 0px;
	text-align: center;
	background: #f6f5fa;
	font-weight: 500;
	color: #545965;
	width: 100%;

	> ${TableCell}:last-child {
		flex: 1;
	}
`;

export const NoDataWrap = styled(TableRowWrap)`
	display: flex;
	justify-content: center;
	align-items: center;
	color: blue;
`;

export const Clickable = styled.p`
text-decoration: underline;
&:hover {
    color: blue;
    cursor: pointer;
}
`;