import { TableSymbols } from "../components/Table/TableSymbols";

export const getSymbolString = () => {
    return TableSymbols.cryptocurrencies.join(',');
};