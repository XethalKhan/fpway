function composition(...funcs){
    const lastIndex = funcs.length - 1;
    const result = funcs.reduce((f, g) => (...args) => f(g(...args)));
    result.arrity = funcs[lastIndex].arrity ? funcs[lastIndex].arrity : funcs[lastIndex].length;
    return result;
}

export default composition;