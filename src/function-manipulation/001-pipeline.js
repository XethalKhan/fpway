function pipeline(...funcs){
    const result = funcs.reduce((f, g) => (...args) => g(f(...args)));
    result.arrity = funcs[0].arrity ? funcs[0].arrity : funcs[0].length;
    return result;
}

export default pipeline;