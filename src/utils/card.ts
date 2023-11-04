export const getSymbolStringFromStore = (bookmarks: string[]) => {
    let result = '';

    bookmarks.forEach((item, index) => {
    if (item === 'Ƀ') {
        result += 'BTC';
    } else if (item === 'Ξ') {
        result += 'ETH';
    } else {
        result += item;
    }
    if (index < bookmarks.length - 1) {
        result += ',';
    }
    });

    return result;
};