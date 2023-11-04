import styled from "styled-components";

export const ModalBtn = styled.button`
	background-color: #4000c7;
	text-decoration: none;
	border: none;
	padding: 20px;
	color: white;
	border-radius: 30px;
	cursor: pointer;
`;

export const ModalView = styled.div`
	border-radius: 10px;
	background-color: #ffffff;
	width: 500px;
	height: auto;
	min-height: 230px;
	margin-bottom: 300px;
    margin-top: 300px;
	padding-bottom: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	gap: 30px;
`;

export const ModalBackdrop = styled.div`
	position: fixed;
	background-color: rgba(0, 0, 0, 0.4);
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
`;

export const ModalBtnWrapper = styled.div`
	flex: 1;
`;

export const ModalTitle = styled.div`
	font-size: 20px;
	color: #475ed4;
	flex: 1;
	margin-top: 10px;
	text-align: center;
	width: 73%;
	div {
		line-height: 30px;
	}
`;

export const ModalCell = styled.div`
    min-width: 200px;
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

export const ConfirmBtn = styled(ModalBtn)`
	background-color: gold;
	margin: 10px;
	padding: 5px 10px;
	border-radius: 5px;
	width: 150px;
	height: 40px;
	color: #eff1ff;
	background: #3660f9;
	&:hover {
		background: #1d46da;
	}
`;