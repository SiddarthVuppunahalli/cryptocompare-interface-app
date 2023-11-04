import { TableSymbols } from "../components/Table/TableSymbols";

export const getSymbolString = () => {
    return TableSymbols.cryptocurrencies.join(',');
};

export const getNameFromSymbol = (symbol: string) => {
    if (symbol === 'Ƀ') {
        return 'BTC';
    } else if (symbol === 'Ξ') {
        return 'ETH';
    } else {
        return symbol;
    }
}