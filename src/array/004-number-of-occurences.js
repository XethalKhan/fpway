export function numbreOfOccurences(needle, haystack){
    return haystack.reduce((result, element) => (needle === element ? result + 1: result), 0);
}

export default numbreOfOccurences;