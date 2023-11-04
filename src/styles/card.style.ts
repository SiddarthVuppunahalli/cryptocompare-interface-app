import styled from "styled-components";

interface DivProps {
    bgColor?: string,
};

export const CardWrap = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	gap: 25px;
`;

export const CardBox = styled.div`
	display: flex;
	width: 50%;
	height: 90%;
	align-items: center;
	font-size: 1.3rem;
	border-radius: 5px;
	border: 1px solid gray;
	box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.09);
`;

export const CardNotFoundBox = styled.div`
	display: flex;
	width: 25%;
	height: 90%;
	align-items: center;
	font-size: 1.3rem;
	border-radius: 5px;
	border: 1px solid gray;
    background-color: rgba(128, 128, 128, 0.2);
    justify-content: center;
	box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.09);
`;

export const CardColor = styled.div<DivProps>`
	width: 10px;
	height: 100%;
	background-color: ${(props) => props.bgColor};
	border-radius: 5px 0px 0px 5px;
`;

export const CardButtonWrapper = styled.div`
	margin: 25px;
`;


export const CardSeparator = styled.div`
	border-left: 1px solid lightgray;
	height: 50px;
`;

export const CardContent = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	align-items: flex-end;
	padding: 40px;
`;

export const CardsWrapper = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	position: relative;
	gap: 30px;
	margin-top: 30px;
	margin-bottom: 30px;
`;