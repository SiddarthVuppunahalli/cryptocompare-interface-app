import * as T from '../../styles/table.style';

type NoDataProps = {
	text: string
}

function NoData({ text }: NoDataProps) {
	return <T.NoDataWrap>{text}</T.NoDataWrap>;
}

NoData.defaultProps = {
	text: 'No data available in table'
}

export default NoData;